"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const testing_1 = require("@angular-devkit/schematics/testing");
const path = require("path");
const collectionPath = path.join(__dirname, '../../collection.json');
xdescribe('schema:', () => {
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
    it('should create sync schema', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const schemaName = 'supply';
        const tree = yield runner
            .runSchematicAsync('schema', Object.assign(Object.assign({}, componentOptions), { name: schemaName }), appTree)
            .toPromise();
        const files = tree.files;
        const fullFilePath = `/projects/${componentOptions.name}/src/app/${schemaName}/${schemaName}.constants.ts`;
        const schemaContent = getFileContent(tree, `/projects/${componentOptions.name}/src/app/${schemaName}/${schemaName}.constants.ts`);
        expect(files).toContain(fullFilePath);
        expect(schemaContent).toMatch(new RegExp(`name: '${schemaName}'`));
        expect(schemaContent).toMatch(new RegExp(`export const ${schemaName}Schema: PoSyncSchema`));
    }));
    /** Gets the content of a specified file from a schematic tree. */
    function getFileContent(tree, filePath) {
        const contentBuffer = tree.read(filePath);
        if (!contentBuffer) {
            throw new Error(`Cannot read "${filePath}" because it does not exist.`);
        }
        return contentBuffer.toString();
    }
});
//# sourceMappingURL=index.spec.js.map