import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import { Tree } from '@angular-devkit/schematics';

import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

xdescribe('Schematic: ng-add', () => {
  const runner = new SchematicTestRunner('schematics', collectionPath);

  const workspaceOptions: WorkspaceOptions = {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '6.0.0'
  };

  const componentOptions: any = {
    name: 'po'
  };

  let appTree: UnitTestTree;
  let infoOutput: Array<string>;

  beforeEach(async () => {
    appTree = await runner.runExternalSchematic('@schematics/angular', 'workspace', workspaceOptions);
    appTree = await runner.runExternalSchematic('@schematics/angular', 'application', componentOptions, appTree);

    infoOutput = [];
    runner.logger.subscribe(e => {
      if (e.level === 'info') {
        infoOutput.push(e.message);
      }
    });
  });

  describe('Dependencies:', () => {
    it('should update package.json with @po-ui/ng-sync dependencies and run nodePackageInstall', async () => {
      const tree = await runner.runSchematic('ng-add', componentOptions, appTree);
      const packageJson = JSON.parse(getFileContent(tree, '/package.json'));
      const dependencies = packageJson.dependencies;

      expect(dependencies['@po-ui/ng-sync']).toBeDefined();
      expect(Object.keys(dependencies)).toEqual(Object.keys(dependencies).sort());
      expect(runner.tasks.some(task => task.name === 'node-package')).toBe(true);
      expect(infoOutput.length).toBe(1);
    });
  });

  describe('Imports:', () => {
    it('should add the PoSyncModule and PoStorageModule to the project module', async () => {
      const poSyncModuleName = 'PoSyncModule';
      const poStorageModuleName = 'PoStorageModule';

      const tree = await runner.runSchematic('ng-add', componentOptions, appTree);
      const fileContent = getFileContent(tree, `projects/${componentOptions.name}/src/app/app.module.ts`);

      expect(fileContent).toContain(poSyncModuleName);
      expect(fileContent).toContain(poStorageModuleName);
    });
  });
});

/** Gets the content of a specified file from a schematic tree. */
function getFileContent(tree: Tree, filePath: string): string {
  const contentBuffer = tree.read(filePath);

  if (!contentBuffer) {
    throw new Error(`Cannot read "${filePath}" because it does not exist.`);
  }

  return contentBuffer.toString();
}
