"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasNgModuleImport = exports.addExportComponentToModule = exports.addDeclarationComponentToModule = exports.addModuleImportToModule = exports.getSourceFile = exports.addModuleImportToRootModule = void 0;
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const schematics_1 = require("@angular-devkit/schematics");
const ts = require("typescript");
const project_1 = require("../project");
function addModuleImportToRootModule(options, moduleName, modulePath) {
    return (host) => {
        var _a;
        const workspace = (_a = (0, project_1.getWorkspaceConfigGracefully)(host)) !== null && _a !== void 0 ? _a : {};
        const project = (0, project_1.getProjectFromWorkspace)(workspace, options.project);
        const appModulePath = (0, ng_ast_utils_1.getAppModulePath)(host, (0, project_1.getProjectMainFile)(project));
        if (!hasNgModuleImport(host, appModulePath, moduleName)) {
            // not add the module if the project already use
            addModuleImportToModule(host, appModulePath, moduleName, modulePath);
        }
        return host;
    };
}
exports.addModuleImportToRootModule = addModuleImportToRootModule;
/** Reads file given path and returns TypeScript source file. */
function getSourceFile(host, path) {
    const buffer = host.read(path);
    if (!buffer) {
        throw new schematics_1.SchematicsException(`Could not find file for path: ${path}`);
    }
    return ts.createSourceFile(path, buffer.toString(), ts.ScriptTarget.Latest, true);
}
exports.getSourceFile = getSourceFile;
/** */
function addModuleImportToModule(tree, modulePath, moduleName, importPath) {
    const moduleSource = getSourceFile(tree, modulePath);
    const changes = (0, ast_utils_1.addImportToModule)(moduleSource, modulePath, moduleName, importPath);
    return insertInModule(tree, changes, modulePath);
}
exports.addModuleImportToModule = addModuleImportToModule;
/** */
function addDeclarationComponentToModule(tree, modulePath, moduleName, importPath) {
    const moduleSource = getSourceFile(tree, modulePath);
    const changes = (0, ast_utils_1.addDeclarationToModule)(moduleSource, modulePath, moduleName, importPath);
    return insertInModule(tree, changes, modulePath);
}
exports.addDeclarationComponentToModule = addDeclarationComponentToModule;
/** */
function addExportComponentToModule(tree, modulePath, moduleName, importPath) {
    const moduleSource = getSourceFile(tree, modulePath);
    const changes = (0, ast_utils_1.addExportToModule)(moduleSource, modulePath, moduleName, importPath);
    return insertInModule(tree, changes, modulePath);
}
exports.addExportComponentToModule = addExportComponentToModule;
/**
 * Whether the Angular module in the given path imports the specified module class name.
 */
function hasNgModuleImport(tree, modulePath, className) {
    const moduleFileContent = tree.read(modulePath);
    if (!moduleFileContent) {
        throw new schematics_1.SchematicsException(`Could not read Angular module file: ${modulePath}`);
    }
    const parsedFile = ts.createSourceFile(modulePath, moduleFileContent.toString(), ts.ScriptTarget.Latest, true);
    const ngModuleMetadata = findNgModuleMetadata(parsedFile);
    if (!ngModuleMetadata) {
        throw new schematics_1.SchematicsException(`Could not find NgModule declaration inside: '${modulePath}'`);
    }
    for (const property of ngModuleMetadata.properties) {
        if (!ts.isPropertyAssignment(property) ||
            property.name.getText() !== 'imports' ||
            !ts.isArrayLiteralExpression(property.initializer)) {
            continue;
        }
        if (property.initializer.elements.some(element => element.getText() === className)) {
            return true;
        }
    }
    return false;
}
exports.hasNgModuleImport = hasNgModuleImport;
/**
 * Finds a NgModule declaration within the specified TypeScript node and returns the
 * corresponding metadata for it. This function searches breadth first because
 * NgModule's are usually not nested within other expressions or declarations.
 */
function findNgModuleMetadata(rootNode) {
    // Add immediate child nodes of the root node to the queue.
    const nodeQueue = [...rootNode.getChildren()];
    while (nodeQueue.length) {
        const node = nodeQueue.shift();
        if (ts.isDecorator(node) && ts.isCallExpression(node.expression) && isNgModuleCallExpression(node.expression)) {
            return node.expression.arguments[0];
        }
        else {
            nodeQueue.push(...node.getChildren());
        }
    }
    return null;
}
/** Whether the specified call expression is referring to a NgModule definition. */
function isNgModuleCallExpression(callExpression) {
    if (!callExpression.arguments.length || !ts.isObjectLiteralExpression(callExpression.arguments[0])) {
        return false;
    }
    const decoratorIdentifier = resolveIdentifierOfExpression(callExpression.expression);
    return decoratorIdentifier ? decoratorIdentifier.text === 'NgModule' : false;
}
/**
 * Resolves the last identifier that is part of the given expression. This helps resolving
 * identifiers of nested property access expressions (e.g. myNamespace.core.NgModule).
 */
function resolveIdentifierOfExpression(expression) {
    if (ts.isIdentifier(expression)) {
        return expression;
    }
    else if (ts.isPropertyAccessExpression(expression)) {
        return expression.name;
    }
    return null;
}
function insertInModule(tree, changes, modulePath) {
    const recorder = tree.beginUpdate(modulePath);
    changes.forEach(change => {
        if (change instanceof change_1.InsertChange) {
            recorder.insertLeft(change.pos, change.toAdd);
        }
    });
    tree.commitUpdate(recorder);
}
//# sourceMappingURL=module.js.map