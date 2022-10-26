"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const package_config_1 = require("@po-ui/ng-schematics/package-config");
const changes_1 = require("./changes");
function default_1() {
    return (0, schematics_1.chain)([(0, package_config_1.updatePackageJson)('14.5.1', changes_1.updateDepedenciesVersion), postUpdate()]);
}
exports.default = default_1;
function postUpdate() {
    return (_, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
//# sourceMappingURL=index.js.map