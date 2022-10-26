"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateToV3 = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const package_config_1 = require("@po-ui/ng-schematics/package-config");
const changes_1 = require("./changes");
function updateToV3() {
    return (0, schematics_1.chain)([(0, package_config_1.updatePackageJson)('14.5.1', changes_1.updateDepedenciesVersion), postUpdate()]);
}
exports.updateToV3 = updateToV3;
function postUpdate() {
    return (_, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
//# sourceMappingURL=index.js.map