"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildComponent = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const find_module_1 = require("@schematics/angular/utility/find-module");
const core_1 = require("@angular-devkit/core");
const parse_name_1 = require("@schematics/angular/utility/parse-name");
const validation_1 = require("@schematics/angular/utility/validation");
const supported_css_extensions_1 = require("../utils/supported-css-extensions");
const project_1 = require("../project");
const module_1 = require("../module");
function buildComponent(options) {
    return (host) => {
        var _a;
        const workspace = (_a = (0, project_1.getWorkspaceConfigGracefully)(host)) !== null && _a !== void 0 ? _a : {};
        const project = (0, project_1.getProjectFromWorkspace)(workspace, options.project);
        if (options.path === undefined && project) {
            options.path = (0, project_1.getDefaultPath)(project);
        }
        options.module = (0, find_module_1.findModuleFromOptions)(host, options);
        const parsedPath = (0, parse_name_1.parseName)(options.path, options.name);
        options.name = parsedPath.name;
        options.path = parsedPath.path;
        options.selector = buildSelector(options, (project && project.prefix) || '');
        if (!supported_css_extensions_1.supportedCssExtensions.includes(options.style)) {
            options.style = 'css';
        }
        validateName(options.name);
        (0, validation_1.validateHtmlSelector)(options.selector);
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
            options.routing ? (0, schematics_1.noop)() : (0, schematics_1.filter)(path => !path.endsWith('-routing.module.ts.template')),
            options.createModule ? (0, schematics_1.noop)() : (0, schematics_1.filter)(path => !path.endsWith('.module.ts.template')),
            options.skipTests ? (0, schematics_1.filter)(path => !path.endsWith('.spec.ts.template')) : (0, schematics_1.noop)(),
            (0, schematics_1.applyTemplates)(Object.assign(Object.assign({}, core_1.strings), options)),
            (0, schematics_1.move)(null, parsedPath.path)
        ]);
        return (0, schematics_1.chain)([
            options.createModule ? addImportToModule(options) : addDeclarationToModule(options),
            (0, schematics_1.mergeWith)(templateSource)
        ]);
    };
}
exports.buildComponent = buildComponent;
function validateName(name) {
    if (name && /^\d/.test(name)) {
        throw new schematics_1.SchematicsException(core_1.tags.oneLine `name (${name})
        can not start with a digit.`);
    }
}
function buildSelector(options, projectPrefix) {
    let selector = core_1.strings.dasherize(options.name);
    if (options.prefix) {
        selector = `${options.prefix}-${selector}`;
    }
    else if (options.prefix === undefined && projectPrefix) {
        selector = `${projectPrefix}-${selector}`;
    }
    return selector;
}
function addImportToModule(options) {
    return (tree) => {
        if (!options.module || options.routing) {
            return tree;
        }
        const modulePath = options.module;
        const componentModulePath = (0, core_1.normalize)(`/${options.path}/` + core_1.strings.dasherize(options.name) + '/' + core_1.strings.dasherize(options.name) + '.module');
        const relativePath = (0, find_module_1.buildRelativePath)(modulePath, componentModulePath);
        const classifiedModuleName = core_1.strings.classify(`${options.name}Module`);
        return (0, module_1.addModuleImportToModule)(tree, modulePath, classifiedModuleName, relativePath);
    };
}
function addDeclarationToModule(options) {
    return (tree) => {
        if (!options.module) {
            return tree;
        }
        const modulePath = options.module;
        const componentPath = (0, core_1.normalize)(`/${options.path}/` + core_1.strings.dasherize(options.name) + '/' + core_1.strings.dasherize(options.name) + '.component');
        const relativePath = (0, find_module_1.buildRelativePath)(modulePath, componentPath);
        const classifiedName = core_1.strings.classify(`${options.name}Component`);
        (0, module_1.addDeclarationComponentToModule)(tree, modulePath, classifiedName, relativePath);
        if (options.export) {
            (0, module_1.addExportComponentToModule)(tree, modulePath, classifiedName, relativePath);
        }
    };
}
//# sourceMappingURL=build-component.js.map