"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const testing_1 = require("@angular-devkit/schematics/testing");
const path = require("path");
const collectionPath = path.join(__dirname, '../../collection.json');
xdescribe('sidemenu:', () => {
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
    describe('Imports:', () => {
        it('should add the RouterModule to the project module', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const routerModuleName = 'RouterModule';
            const tree = yield runner.runSchematicAsync('sidemenu', componentOptions, appTree).toPromise();
            const fileContent = getFileContent(tree, `projects/${componentOptions.name}/src/app/app.module.ts`);
            expect(fileContent).toContain(routerModuleName);
        }));
    });
    describe('Component: ', () => {
        it('should create app.component.ts|html|css', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const tree = yield runner.runSchematicAsync('sidemenu', componentOptions, appTree).toPromise();
            const files = tree.files;
            expect(files).toContain(`/projects/${componentOptions.name}/src/app/app.component.ts`);
            expect(files).toContain(`/projects/${componentOptions.name}/src/app/app.component.html`);
            expect(files).toContain(`/projects/${componentOptions.name}/src/app/app.component.${componentOptions.style}`);
        }));
        it('should contains `po-wrapper`, `po-toolbar` and `po-menu` in app.component.html', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const poWrapper = '<div class="po-wrapper">';
            const poToolbar = 'po-toolbar';
            const poMenu = '<po-menu [p-menus]="menus"></po-menu>';
            const htmlComponent = `projects/${componentOptions.name}/src/app/app.component.html`;
            const tree = yield runner.runSchematicAsync('sidemenu', componentOptions, appTree).toPromise();
            const fileContent = getFileContent(tree, htmlComponent);
            expect(fileContent).toContain(poWrapper);
            expect(fileContent).toContain(poToolbar);
            expect(fileContent).toContain(poMenu);
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