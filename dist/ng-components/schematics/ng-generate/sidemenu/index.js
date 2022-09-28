"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const module_1 = require("@po-ui/ng-schematics/module");
const project_1 = require("@po-ui/ng-schematics/project");
const utils_1 = require("@po-ui/ng-schematics/utils");
const routerModule = 'RouterModule.forRoot([])';
const routerModulePath = '@angular/router';
/**
 * Configures and creates component to use with sidemenu layout, through steps below:
 * - Create a app.component with components to do sidemenu layout;
 * - Imports RouterModule in app root module;
 */
function default_1(options) {
    return (0, schematics_1.chain)([createAppComponent(options), (0, module_1.addModuleImportToRootModule)(options, routerModule, routerModulePath)]);
}
exports.default = default_1;
function createAppComponent(options) {
    return (tree) => {
        var _a;
        const workspace = (_a = (0, project_1.getWorkspaceConfigGracefully)(tree)) !== null && _a !== void 0 ? _a : {};
        const project = (0, project_1.getProjectFromWorkspace)(workspace, options.project);
        const sourceDir = `${project.sourceRoot}/app`;
        if (!utils_1.supportedCssExtensions.includes(options.style)) {
            options.style = 'css';
        }
        const templateSource = applyWithOverwrite((0, schematics_1.url)('./files'), [
            options.skipTests ? (0, schematics_1.filter)(path => !path.endsWith('.spec.ts.template')) : (0, schematics_1.noop)(),
            (0, schematics_1.pathTemplate)(Object.assign({}, options)),
            (0, schematics_1.applyTemplates)(Object.assign(Object.assign({}, core_1.strings), options)),
            (0, schematics_1.move)((0, core_1.normalize)(sourceDir))
        ]);
        return (0, schematics_1.chain)([templateSource]);
    };
}
function applyWithOverwrite(source, rules) {
    return (tree, context) => {
        const rule = (0, schematics_1.mergeWith)((0, schematics_1.apply)(source, [
            ...rules,
            (0, schematics_1.forEach)(fileEntry => {
                if (tree.exists(fileEntry.path)) {
                    tree.overwrite(fileEntry.path, fileEntry.content);
                    return null;
                }
                return fileEntry;
            })
        ]), schematics_1.MergeStrategy.Overwrite);
        return rule(tree, context);
    };
}
//# sourceMappingURL=index.js.map