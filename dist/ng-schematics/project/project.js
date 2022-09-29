"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultPath = exports.getProjectMainFile = exports.getProjectTargetOptions = exports.getProjectFromWorkspace = exports.getWorkspaceConfigGracefully = void 0;
const jsonc_parser_1 = require("jsonc-parser");
const schematics_1 = require("@angular-devkit/schematics");
/** Name of the default Angular CLI workspace configuration files. */
const defaultWorkspaceConfigPaths = ['/angular.json', '/.angular.json'];
function getWorkspaceConfigGracefully(tree) {
    const path = defaultWorkspaceConfigPaths.find(filePath => tree.exists(filePath));
    const configBuffer = tree.read(path);
    if (!path || !configBuffer) {
        return null;
    }
    try {
        // Parse the workspace file as JSON5 which is also supported for CLI
        // workspace configurations.
        return (0, jsonc_parser_1.parse)(configBuffer.toString());
    }
    catch (e) {
        return null;
    }
}
exports.getWorkspaceConfigGracefully = getWorkspaceConfigGracefully;
function getProjectFromWorkspace(workspace, projectName) {
    const project = workspace.projects[projectName || workspace.defaultProject];
    if (!project) {
        throw new schematics_1.SchematicsException(`Could not find project in workspace: ${projectName}`);
    }
    return project;
}
exports.getProjectFromWorkspace = getProjectFromWorkspace;
/** Resolves the architect options for the build target of the given project. */
function getProjectTargetOptions(project, buildTarget) {
    if (project.targets && project.targets[buildTarget] && project.targets[buildTarget].options) {
        return project.targets[buildTarget].options;
    }
    // TODO(devversion): consider removing this architect check if the CLI completely switched
    // over to `targets`, and the `architect` support has been removed.
    // See: https://github.com/angular/angular-cli/commit/307160806cb48c95ecb8982854f452303801ac9f
    if (project.architect && project.architect[buildTarget] && project.architect[buildTarget].options) {
        return project.architect[buildTarget].options;
    }
    return console.warn(`Cannot determine project target configuration for: ${buildTarget}.`);
}
exports.getProjectTargetOptions = getProjectTargetOptions;
/** Looks for the main TypeScript file in the given project and returns its path. */
function getProjectMainFile(project) {
    const buildOptions = getProjectTargetOptions(project, 'build');
    if (!buildOptions.main) {
        throw new schematics_1.SchematicsException(`Could not find the project main file inside of the ` + `workspace config (${project.sourceRoot})`);
    }
    return buildOptions.main;
}
exports.getProjectMainFile = getProjectMainFile;
// Return default path of application or library
function getDefaultPath(project) {
    const root = project.sourceRoot ? `/${project.sourceRoot}/` : `/${project.root}/src/`;
    const projectDirName = project.projectType === 'application' ? 'app' : 'lib';
    return `${root}${projectDirName}`;
}
exports.getDefaultPath = getDefaultPath;
//# sourceMappingURL=project.js.map