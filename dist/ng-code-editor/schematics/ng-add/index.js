"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const package_config_1 = require("@po-ui/ng-schematics/package-config");
const module_1 = require("@po-ui/ng-schematics/module/module");
const build_target_options_1 = require("@po-ui/ng-schematics/build-target-options/build-target-options");
/** PO Module name that will be inserted into app root module */
const poCodeEditorModuleName = 'PoCodeEditorModule';
const poCodeEditorModuleSourcePath = '@po-ui/ng-code-editor';
// Path needs to be always relative to the `package.json` or workspace root.
const poThemeStylePath = './node_modules/@po-ui/style/css/po-theme-default.min.css';
// Monaco asset to be included in the project.
const poCodeEditorMonacoAsset = { glob: '**/*', input: 'node_modules/monaco-editor/min', output: '/assets/monaco/' };
/**
 * Scaffolds the basics of the PO Code Editor, this includes:
 *  - Install dependencies;
 *  - Imports PoCodeEditorModule to app root module;
 *  - Configure the theme's style in the project workspace;
 *  - Configure the monaco editor's asset in the project workspace;
 *
 */
function default_1(options) {
    return (0, schematics_1.chain)([
        addPoPackageAndInstall(),
        (0, module_1.addModuleImportToRootModule)(options, poCodeEditorModuleName, poCodeEditorModuleSourcePath),
        (0, build_target_options_1.configuringBuildTargets)(options, 'styles', poThemeStylePath),
        (0, build_target_options_1.configuringBuildTargets)(options, 'assets', poCodeEditorMonacoAsset)
    ]);
}
exports.default = default_1;
function addPoPackageAndInstall() {
    return (tree, context) => {
        (0, package_config_1.addPackageToPackageJson)(tree, '@po-ui/ng-code-editor', '14.5.0');
        // install packages
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
//# sourceMappingURL=index.js.map