"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const testing_1 = require("@angular-devkit/schematics/testing");
const path = require("path");
const collectionPath = path.join(__dirname, '../collection.json');
xdescribe('Schematic: ng-add', () => {
    const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
    const workspaceOptions = {
        name: 'workspace',
        newProjectRoot: 'projects',
        version: '6.0.0'
    };
    const componentOptions = {
        name: 'po'
    };
    let appTree;
    let infoOutput;
    beforeEach(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        appTree = yield runner.runExternalSchematicAsync('@schematics/angular', 'workspace', workspaceOptions).toPromise();
        appTree = yield runner
            .runExternalSchematicAsync('@schematics/angular', 'application', componentOptions, appTree)
            .toPromise();
        infoOutput = [];
        runner.logger.subscribe(e => {
            if (e.level === 'info') {
                infoOutput.push(e.message);
            }
        });
    }));
    describe('Dependencies:', () => {
        it('should update package.json with @po-ui/ng-sync dependencies and run nodePackageInstall', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const tree = yield runner.runSchematicAsync('ng-add', componentOptions, appTree).toPromise();
            const packageJson = JSON.parse(getFileContent(tree, '/package.json'));
            const dependencies = packageJson.dependencies;
            const info = 'Sync added successfully, please execute the commands `npm install cordova-plugin-network-information @awesome-cordova-plugins/network` and `ionic cap sync`';
            expect(dependencies['@po-ui/ng-sync']).toBeDefined();
            expect(Object.keys(dependencies)).toEqual(Object.keys(dependencies).sort());
            expect(runner.tasks.some(task => task.name === 'node-package')).toBe(true);
            expect(infoOutput.length).toBe(1);
            expect(infoOutput[0]).toMatch(new RegExp(`${info}`));
        }));
    });
    describe('Imports:', () => {
        it('should add the PoSyncModule and PoStorageModule to the project module', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const poSyncModuleName = 'PoSyncModule';
            const poStorageModuleName = 'PoStorageModule';
            const tree = yield runner.runSchematicAsync('ng-add', componentOptions, appTree).toPromise();
            const fileContent = getFileContent(tree, `projects/${componentOptions.name}/src/app/app.module.ts`);
            expect(fileContent).toContain(poSyncModuleName);
            expect(fileContent).toContain(poStorageModuleName);
        }));
    });
});
/** Gets the content of a specified file from a schematic tree. */
function getFileContent(tree, filePath) {
    const contentBuffer = tree.read(filePath);
    if (!contentBuffer) {
        throw new Error(`Cannot read "${filePath}" because it does not exist.`);
    }
    return contentBuffer.toString();
}
//# sourceMappingURL=index.spec.js.map