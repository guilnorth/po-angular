"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOptionToTarget = exports.configuringBuildTargets = void 0;
const project_1 = require("../project");
/** Add a file or asset in project workspace */
function configuringBuildTargets(options, optionsProperty, buildTargetElement) {
    return function (tree) {
        var _a;
        const workspace = (_a = (0, project_1.getWorkspaceConfigGracefully)(tree)) !== null && _a !== void 0 ? _a : {};
        const project = (0, project_1.getProjectFromWorkspace)(workspace, options.project);
        addOptionToTarget(project, 'build', tree, optionsProperty, buildTargetElement, workspace);
        addOptionToTarget(project, 'test', tree, optionsProperty, buildTargetElement, workspace);
        return tree;
    };
}
exports.configuringBuildTargets = configuringBuildTargets;
/** Adds an entry to the given project target options. */
function addOptionToTarget(project, targetName, host, optionsProperty, optionPath, workspace) {
    const targetOptions = (0, project_1.getProjectTargetOptions)(project, targetName);
    if (!targetOptions) {
        return;
    }
    if (!targetOptions[optionsProperty]) {
        targetOptions[optionsProperty] = [optionPath];
    }
    else {
        const existingPaths = targetOptions[optionsProperty].map((s) => (typeof s === 'string' ? s : s.input));
        for (const [, optionPathValue] of existingPaths.entries()) {
            if (optionPathValue === optionPath) {
                return;
            }
        }
        targetOptions[optionsProperty].unshift(optionPath);
    }
    host.overwrite('angular.json', JSON.stringify(workspace, null, 2));
}
exports.addOptionToTarget = addOptionToTarget;
//# sourceMappingURL=build-target-options.js.map