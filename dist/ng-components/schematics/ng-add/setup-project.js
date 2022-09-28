"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const module_1 = require("@po-ui/ng-schematics/module");
const project_1 = require("@po-ui/ng-schematics/project");
/** PO Module name that will insert in app root module */
const poModuleName = 'PoModule';
const poModuleSourcePath = '@po-ui/ng-components';
/**
 * Scaffolds the basics of a Angular Material application, this includes:
 *  - Add PO Module to app root module
 *  - Adds themes to styles
 *  - Run sidemenu schematic
 */
function default_1(options) {
    return (0, schematics_1.chain)([
        (0, module_1.addModuleImportToRootModule)(options, poModuleName, poModuleSourcePath),
        addThemeToAppStyles(options),
        configureSideMenu(options)
    ]);
}
exports.default = default_1;
/** Add PO theme to project styles */
function addThemeToAppStyles(options) {
    return function (tree) {
        var _a;
        const workspace = (_a = (0, project_1.getWorkspaceConfigGracefully)(tree)) !== null && _a !== void 0 ? _a : {};
        const project = (0, project_1.getProjectFromWorkspace)(workspace, options.project);
        // Path needs to be always relative to the `package.json` or workspace root.
        const themePath = './node_modules/@po-ui/style/css/po-theme-default.min.css';
        addThemeStyleToTarget(project, 'build', tree, themePath, workspace);
        addThemeStyleToTarget(project, 'test', tree, themePath, workspace);
        return tree;
    };
}
/** Adds a theming style entry to the given project target options. */
function addThemeStyleToTarget(project, targetName, host, assetPath, workspace) {
    const targetOptions = (0, project_1.getProjectTargetOptions)(project, targetName);
    if (!targetOptions.styles) {
        targetOptions.styles = [assetPath];
    }
    else {
        const existingStyles = targetOptions.styles.map((s) => (typeof s === 'string' ? s : s.input));
        for (const [, stylePath] of existingStyles.entries()) {
            if (stylePath === assetPath) {
                return;
            }
        }
        targetOptions.styles.unshift(assetPath);
    }
    host.overwrite('angular.json', JSON.stringify(workspace, null, 2));
}
function configureSideMenu(options) {
    return options.configSideMenu ? (0, schematics_1.schematic)('sidemenu', Object.assign({}, options)) : (0, schematics_1.noop)();
}
//# sourceMappingURL=setup-project.js.map