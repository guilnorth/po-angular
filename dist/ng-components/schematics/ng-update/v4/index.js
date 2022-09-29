"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const project_1 = require("@po-ui/ng-schematics/project");
const package_config_1 = require("@po-ui/ng-schematics/package-config");
const changes_1 = require("./changes");
function default_1() {
    return (0, schematics_1.chain)([(0, package_config_1.updatePackageJson)('14.5.0', changes_1.updateDepedenciesVersion), createUpgradeRule(), postUpdate()]);
}
exports.default = default_1;
function postUpdate() {
    return (_, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
function createUpgradeRule() {
    return (tree, context) => {
        var _a;
        const logger = context.logger;
        const workspace = (_a = (0, project_1.getWorkspaceConfigGracefully)(tree)) !== null && _a !== void 0 ? _a : {};
        if (workspace === null) {
            logger.error('Não foi possível encontrar o arquivo de configuração de workspace.');
            return;
        }
        const projectNames = Object.keys(workspace.projects);
        for (const projectName of projectNames) {
            const project = workspace.projects[projectName];
            const entryFolderProject = project.projectType === 'library' ? 'lib' : 'app';
            const sourceDir = `${project.sourceRoot}/${entryFolderProject}`;
            applyUpdateInContent(tree, sourceDir);
        }
    };
}
function applyUpdateInContent(tree, path) {
    const directory = tree.getDir(path);
    if (directory.subfiles.length) {
        directory.subfiles.forEach(file => {
            const filePath = path + '/' + file;
            const content = tree.read(filePath).toString('utf-8');
            if (!content) {
                return;
            }
            let updated = content;
            if (file.endsWith('.ts')) {
                updated = replaceWithChanges(changes_1.replaceChanges, updated);
                if (updated !== content) {
                    tree.overwrite(filePath, updated);
                }
            }
        });
    }
    if (directory.subdirs.length) {
        directory.subdirs.forEach(subDir => {
            applyUpdateInContent(tree, path + '/' + subDir);
        });
    }
}
function replaceWithChanges(replaces, content = '') {
    replaces.forEach(({ replace, replaceWith }) => {
        const regex = new RegExp(replace, 'gi');
        content = content.replace(regex, replaceWith);
    });
    return content;
}
//# sourceMappingURL=index.js.map