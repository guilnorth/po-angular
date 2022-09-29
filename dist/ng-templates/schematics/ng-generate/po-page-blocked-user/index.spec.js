"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const testing_1 = require("@angular-devkit/schematics/testing");
const path = require("path");
const collectionPath = path.join(__dirname, '../../collection.json');
xdescribe('po-page-blocked-user:', () => {
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
    it('should create <name> component', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const componentName = 'supply';
        const tree = yield runner
            .runSchematicAsync('po-page-blocked-user', Object.assign(Object.assign({}, componentOptions), { name: componentName }), appTree)
            .toPromise();
        const files = tree.files;
        const fullFilePath = (ext) => `/projects/${componentOptions.name}/src/app/${componentName}/${componentName}.component.${ext}`;
        expect(files).toContain(fullFilePath('ts'));
        expect(files).toContain(fullFilePath('html'));
        expect(files).toContain(fullFilePath('spec.ts'));
        expect(files).toContain(fullFilePath(componentOptions.style));
    }));
    it('should create <name> component and <name> module', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const componentName = 'supply';
        const createModule = true;
        const options = Object.assign(Object.assign({}, componentOptions), { name: componentName, createModule, project: 'po' });
        const tree = yield runner.runSchematicAsync('po-page-blocked-user', options, appTree).toPromise();
        const files = tree.files;
        expect(files).toContain(`/projects/${options.project}/src/app/${componentName}/${componentName}.module.ts`);
    }));
    it('should add declaration component in closest module by default', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const options = Object.assign(Object.assign({}, componentOptions), { name: 'customers' });
        const tree = yield runner.runSchematicAsync('po-page-blocked-user', options, appTree).toPromise();
        const moduleContent = getFileContent(tree, `/projects/${componentOptions.name}/src/app/app.module.ts`);
        expect(moduleContent).toMatch(/import.*CustomersComponent.*from '.\/customers\/customers.component'/);
        expect(moduleContent).toMatch(/declarations:\s*\[[^\]]+?,\r?\n\s+CustomersComponent\r?\n/m);
    }));
    it('should import <name> component module if createModule is true', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const options = Object.assign(Object.assign({}, componentOptions), { name: 'customers', createModule: true });
        const tree = yield runner.runSchematicAsync('po-page-blocked-user', options, appTree).toPromise();
        const moduleContent = getFileContent(tree, `/projects/${componentOptions.name}/src/app/app.module.ts`);
        expect(moduleContent).toMatch(/import.*CustomersModule.*from '.\/customers\/customers.module'/);
        expect(moduleContent).toMatch(/imports:\s*\[[^\]]+?,\r?\n\s+CustomersModule\r?\n/m);
    }));
    it('should generate component.less if style is `less`', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const options = Object.assign(Object.assign({}, componentOptions), { name: 'customers', style: 'less' });
        const tree = yield runner.runSchematicAsync('po-page-blocked-user', options, appTree).toPromise();
        const files = tree.files;
        expect(files).toContain(`/projects/${componentOptions.name}/src/app/customers/customers.component.${options.style}`);
    }));
    it('should generate component with stylesheet `css` if options.style is empty', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const options = Object.assign(Object.assign({}, componentOptions), { name: 'customers', style: '' });
        const tree = yield runner.runSchematicAsync('po-page-blocked-user', options, appTree).toPromise();
        const files = tree.files;
        expect(files).toContain(`/projects/${componentOptions.name}/src/app/customers/customers.component.css`);
    }));
    it('shouldn`t generate component spec if `skipTests` is true', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const options = Object.assign(Object.assign({}, componentOptions), { name: 'customers', skipTests: true });
        const tree = yield runner.runSchematicAsync('po-page-blocked-user', options, appTree).toPromise();
        const files = tree.files;
        expect(files).toContain(`/projects/${componentOptions.name}/src/app/customers/customers.component.ts`);
        expect(files).not.toContain(`/projects/${componentOptions.name}/src/app/customers/customers.component.spec.ts`);
    }));
    it('should generate component in path informed', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        // create customers component module to use with path option
        const options = Object.assign(Object.assign({}, componentOptions), { name: 'customers', createModule: true });
        yield runner.runSchematicAsync('po-page-blocked-user', options, appTree).toPromise();
        const optionsPath = Object.assign(Object.assign({}, componentOptions), { name: 'wms', path: `/projects/${componentOptions.name}/src/app/customers` });
        const treePath = yield runner.runSchematicAsync('po-page-blocked-user', optionsPath, appTree).toPromise();
        const files = treePath.files;
        expect(files).toContain(`/projects/${componentOptions.name}/src/app/customers/wms/wms.component.spec.ts`);
        expect(files).toContain(`/projects/${componentOptions.name}/src/app/customers/wms/wms.component.ts`);
        expect(files).toContain(`/projects/${componentOptions.name}/src/app/customers/wms/wms.component.html`);
        expect(files).toContain(`/projects/${componentOptions.name}/src/app/customers/wms/wms.component.${options.style}`);
    }));
    it('should use the custom prefix when create component', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const prefix = 'wms';
        const options = Object.assign(Object.assign({}, componentOptions), { name: 'customers', prefix });
        const tree = yield runner.runSchematicAsync('po-page-blocked-user', options, appTree).toPromise();
        const componentContent = getFileContent(tree, `/projects/${componentOptions.name}/src/app/customers/customers.component.ts`);
        expect(componentContent).toMatch(new RegExp(`selector: '${prefix}-customers'`));
    }));
    it('should use the default prefix when create component if prefix is null', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const prefix = undefined;
        const options = Object.assign(Object.assign({}, componentOptions), { name: 'customers', sample: true, prefix });
        const tree = yield runner.runSchematicAsync('po-page-blocked-user', options, appTree).toPromise();
        const componentContent = getFileContent(tree, `/projects/${componentOptions.name}/src/app/customers/customers.component.ts`);
        expect(componentContent).toMatch(new RegExp(`selector: 'app-customers'`));
    }));
    it('should use only the name how prefix when create component if prefix is ""', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const prefix = '';
        const options = Object.assign(Object.assign({}, componentOptions), { name: 'customers', prefix });
        const tree = yield runner.runSchematicAsync('po-page-blocked-user', options, appTree).toPromise();
        const componentContent = getFileContent(tree, `/projects/${componentOptions.name}/src/app/customers/customers.component.ts`);
        expect(componentContent).toMatch(new RegExp(`selector: 'customers'`));
    }));
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