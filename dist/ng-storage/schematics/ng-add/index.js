"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const package_config_1 = require("@po-ui/ng-schematics/package-config");
const module_1 = require("@po-ui/ng-schematics/module/module");
/** PO Module name that will be inserted into app root module */
const poStorageModuleName = 'PoStorageModule.forRoot()';
const poStorageModuleSourcePath = '@po-ui/ng-storage';
/**
 * Scaffolds the basics of the PO Storage, this includes:
 *  - Install dependencies;
 *  - Imports PoStorageModule to app root module;
 */
function default_1(options) {
    return (0, schematics_1.chain)([
        addPoPackageAndInstall(),
        (0, module_1.addModuleImportToRootModule)(options, poStorageModuleName, poStorageModuleSourcePath)
    ]);
}
exports.default = default_1;
function addPoPackageAndInstall() {
    return (tree, context) => {
        (0, package_config_1.addPackageToPackageJson)(tree, '@po-ui/ng-storage', '14.5.0');
        // install packages
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
//# sourceMappingURL=index.js.map