"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const package_config_1 = require("@po-ui/ng-schematics/package-config");
/**
 * Scaffolds the basics of a PO application, this includes:
 *  - Imports PoModule to app root module;
 *  - Install dependencies;
 *  - Configure theme style in project workspace;
 */
function default_1(options) {
    return (0, schematics_1.chain)([
        addPoPackageAndInstall(),
        (0, schematics_1.schematic)('ng-add-setup-project', Object.assign({}, options))
    ]);
}
exports.default = default_1;
function addPoPackageAndInstall() {
    return (tree, context) => {
        (0, package_config_1.addPackageToPackageJson)(tree, '@po-ui/ng-components', '14.5.0');
        // install packages
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
//# sourceMappingURL=index.js.map