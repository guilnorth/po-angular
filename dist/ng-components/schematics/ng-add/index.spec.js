"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const testing_1 = require("@angular-devkit/schematics/testing");
const project_1 = require("@po-ui/ng-schematics/project");
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
        name: 'po',
        style: 'css',
        skipTests: false
    };
    let appTree;
    beforeEach(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        appTree = yield runner.runExternalSchematicAsync('@schematics/angular', 'workspace', workspaceOptions).toPromise();
        appTree = yield runner
            .runExternalSchematicAsync('@schematics/angular', 'application', componentOptions, appTree)
            .toPromise();
    }));
    describe('Dependencies:', () => {
        it('should update package.json with @po-ui/ng-components dependency and run nodePackageInstall', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const tree = yield runner.runSchematicAsync('ng-add', componentOptions, appTree).toPromise();
            const packageJson = JSON.parse(getFileContent(tree, '/package.json'));
            const dependencies = packageJson.dependencies;
            expect(dependencies['@po-ui/ng-components']).toBeDefined();
            expect(Object.keys(dependencies)).toEqual(Object.keys(dependencies).sort());
            expect(runner.tasks.some(task => task.name === 'node-package')).toBe(true);
        }));
    });
    describe('Imports:', () => {
        it('should add the PoModule to the project module', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const poModuleName = 'PoModule';
            const tree = yield runner.runSchematicAsync('ng-add-setup-project', componentOptions, appTree).toPromise();
            const fileContent = getFileContent(tree, `projects/${componentOptions.name}/src/app/app.module.ts`);
            expect(fileContent).toContain(poModuleName);
        }));
    });
    describe('Theme configuration:', () => {
        const defaultThemePath = './node_modules/@po-ui/style/css/po-theme-default.min.css';
        it('should add default theme in styles of build project', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const tree = yield runner.runSchematicAsync('ng-add-setup-project', componentOptions, appTree).toPromise();
            const workspace = (_a = (0, project_1.getWorkspaceConfigGracefully)(tree)) !== null && _a !== void 0 ? _a : {};
            const project = (0, project_1.getProjectFromWorkspace)(workspace);
            expectProjectStyleFile(project, defaultThemePath);
        }));
        it('shouldn`t add a theme file in styles of build project multiple times', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            var _b;
            writeStyleFileToWorkspace(appTree, defaultThemePath);
            const tree = yield runner.runSchematicAsync('ng-add-setup-project', componentOptions, appTree).toPromise();
            const workspace = (_b = (0, project_1.getWorkspaceConfigGracefully)(tree)) !== null && _b !== void 0 ? _b : {};
            const project = (0, project_1.getProjectFromWorkspace)(workspace);
            const styles = (0, project_1.getProjectTargetOptions)(project, 'build').styles;
            expect(styles).toEqual([`projects/${componentOptions.name}/src/styles.css`, defaultThemePath]);
        }));
    });
});
/** Expects the given file to be in the styles of the specified workspace project. */
function expectProjectStyleFile(project, filePath) {
    expect((0, project_1.getProjectTargetOptions)(project, 'build').styles).toContain(filePath, `Expected "${filePath}" to be added to the project styles in the workspace.`);
}
/** Gets the content of a specified file from a schematic tree. */
function getFileContent(tree, filePath) {
    const contentBuffer = tree.read(filePath);
    if (!contentBuffer) {
        throw new Error(`Cannot read "${filePath}" because it does not exist.`);
    }
    return contentBuffer.toString();
}
/** Writes a specific style file to the workspace in the given tree */
function writeStyleFileToWorkspace(tree, stylePath) {
    var _a;
    const workspace = (_a = (0, project_1.getWorkspaceConfigGracefully)(tree)) !== null && _a !== void 0 ? _a : {};
    const project = (0, project_1.getProjectFromWorkspace)(workspace);
    const buildOptions = (0, project_1.getProjectTargetOptions)(project, 'build');
    if (!buildOptions.styles) {
        buildOptions.styles = [stylePath];
    }
    else {
        buildOptions.styles.push(stylePath);
    }
    tree.overwrite('/angular.json', JSON.stringify(workspace, null, 2));
}
//# sourceMappingURL=index.spec.js.map