"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const project_1 = require("@po-ui/ng-schematics/project");
const module_1 = require("@po-ui/ng-schematics/module");
const package_config_1 = require("@po-ui/ng-schematics/package-config");
const poTemplateModuleName = 'PoTemplatesModule';
const poTemplateModuleSourcePath = '@po-ui/ng-templates';
/**
 * Scaffolds the basics of a PO application, this includes:
 *  - Imports PoTemplatesModule to app root module;
 *  - Install dependencies;
 *  - Configure theme style in project workspace;
 */
function default_1(options) {
    return (0, schematics_1.chain)([
        (0, module_1.addModuleImportToRootModule)(options, poTemplateModuleName, poTemplateModuleSourcePath),
        addPoPackageAndInstall(),
        addThemeToAppStyles(options)
    ]);
}
exports.default = default_1;
function addPoPackageAndInstall() {
    return (tree, context) => {
        (0, package_config_1.addPackageToPackageJson)(tree, '@po-ui/ng-templates', '14.5.0');
        // install packages
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
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
//# sourceMappingURL=index.js.map