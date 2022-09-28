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
        name: 'po'
    };
    let appTree;
    beforeEach(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        appTree = yield runner.runExternalSchematicAsync('@schematics/angular', 'workspace', workspaceOptions).toPromise();
        appTree = yield runner
            .runExternalSchematicAsync('@schematics/angular', 'application', componentOptions, appTree)
            .toPromise();
    }));
    describe('Dependencies:', () => {
        it('should update package.json with @po-ui/ng-code-editor dependency and run nodePackageInstall', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const tree = yield runner.runSchematicAsync('ng-add', componentOptions, appTree).toPromise();
            const packageJson = JSON.parse(getFileContent(tree, '/package.json'));
            const dependencies = packageJson.dependencies;
            expect(dependencies['@po-ui/ng-code-editor']).toBeDefined();
            expect(Object.keys(dependencies)).toEqual(Object.keys(dependencies).sort());
            expect(runner.tasks.some(task => task.name === 'node-package')).toBe(true);
        }));
    });
    describe('Imports:', () => {
        it('should add the PoCodeEditorModule to the project module', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const poCodeEditorModuleName = 'PoCodeEditorModule';
            const tree = yield runner.runSchematicAsync('ng-add', componentOptions, appTree).toPromise();
            const fileContent = getFileContent(tree, `projects/${componentOptions.name}/src/app/app.module.ts`);
            expect(fileContent).toContain(poCodeEditorModuleName);
        }));
    });
    describe('Theme configuration:', () => {
        const defaultThemePath = './node_modules/@po-ui/style/css/po-theme-default.min.css';
        it('should add default theme in styles of build project', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const tree = yield runner.runSchematicAsync('ng-add', componentOptions, appTree).toPromise();
            const workspace = (_a = (0, project_1.getWorkspaceConfigGracefully)(tree)) !== null && _a !== void 0 ? _a : {};
            const project = (0, project_1.getProjectFromWorkspace)(workspace);
            expectProjectPropertyFile(project, defaultThemePath, 'styles');
        }));
        it('shouldn`t add a theme file in styles of build project multiple times', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            var _b;
            writePropertiesFileToWorkspace(appTree, defaultThemePath, 'styles');
            const tree = yield runner.runSchematicAsync('ng-add', componentOptions, appTree).toPromise();
            const workspace = (_b = (0, project_1.getWorkspaceConfigGracefully)(tree)) !== null && _b !== void 0 ? _b : {};
            const project = (0, project_1.getProjectFromWorkspace)(workspace);
            const styles = (0, project_1.getProjectTargetOptions)(project, 'build').styles;
            expect(styles).toEqual([`projects/${componentOptions.name}/src/styles.css`, defaultThemePath]);
        }));
    });
    describe('Assets configuration:', () => {
        const defaultAssetsPath = {
            'glob': '**/*',
            'input': 'node_modules/monaco-editor/min',
            'output': '/assets/monaco/'
        };
        it('should add assets of build project', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const tree = yield runner.runSchematicAsync('ng-add', componentOptions, appTree).toPromise();
            const workspace = (_a = (0, project_1.getWorkspaceConfigGracefully)(tree)) !== null && _a !== void 0 ? _a : {};
            const project = (0, project_1.getProjectFromWorkspace)(workspace);
            const assets = (0, project_1.getProjectTargetOptions)(project, 'build').assets;
            const hasMonacoAssets = assets.some(element => typeof element === 'object' && JSON.stringify(element) === JSON.stringify(defaultAssetsPath));
            expect(hasMonacoAssets).toBe(true);
        }));
        it('shouldn`t add a monaco assets file in assets of build project multiple times', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            var _b;
            writePropertiesFileToWorkspace(appTree, `${defaultAssetsPath}`, 'assets');
            const tree = yield runner.runSchematicAsync('ng-add', componentOptions, appTree).toPromise();
            const workspace = (_b = (0, project_1.getWorkspaceConfigGracefully)(tree)) !== null && _b !== void 0 ? _b : {};
            const project = (0, project_1.getProjectFromWorkspace)(workspace);
            const assets = (0, project_1.getProjectTargetOptions)(project, 'build').assets;
            const getMonacoAssets = assets.filter(element => JSON.stringify(element) === JSON.stringify(defaultAssetsPath));
            expect(getMonacoAssets.length).toBe(1);
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
/** Expects the given file to be in the property of the specified workspace project. */
function expectProjectPropertyFile(project, filePath, property) {
    expect((0, project_1.getProjectTargetOptions)(project, 'build')[property]).toContain(filePath, `Expected "${filePath}" to be added to the project ${property} in the workspace.`);
}
function writePropertiesFileToWorkspace(tree, filePath, property) {
    var _a;
    const workspace = (_a = (0, project_1.getWorkspaceConfigGracefully)(tree)) !== null && _a !== void 0 ? _a : {};
    const project = (0, project_1.getProjectFromWorkspace)(workspace);
    const buildOptions = (0, project_1.getProjectTargetOptions)(project, 'build');
    if (!buildOptions[property]) {
        buildOptions[property] = [filePath];
    }
    else {
        buildOptions[property].push(filePath);
    }
    tree.overwrite('/angular.json', JSON.stringify(workspace, null, 2));
}
//# sourceMappingURL=index.spec.js.map