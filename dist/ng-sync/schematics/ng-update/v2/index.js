"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePackageJson = exports.updateToV2 = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const project_1 = require("@po-ui/ng-schematics/project");
const replace_1 = require("@po-ui/ng-schematics/replace");
const package_config_1 = require("@po-ui/ng-schematics/package-config");
const changes_1 = require("./changes");
function updateToV2() {
    return (0, schematics_1.chain)([
        updatePackageJson('14.5.0', changes_1.dependeciesChanges),
        (0, replace_1.replaceInFile)('tslint.json', changes_1.tsLintChanges),
        createUpgradeRule(),
        postUpdate()
    ]);
}
exports.updateToV2 = updateToV2;
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
            applyUpdateInContent(tree, project.sourceRoot);
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
                updated = updated.replace(changes_1.regexPackages, '@po-ui/ng-$1');
            }
            if (file.endsWith('.html') || file.endsWith('.ts')) {
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
function updatePackageJson(version, dependenciesMap) {
    return (tree) => {
        if (tree.exists('package.json')) {
            const sourceText = tree.read('package.json').toString('utf-8');
            const json = JSON.parse(sourceText);
            if (!json.dependencies) {
                json.dependencies = {};
            }
            Object.keys(dependenciesMap).forEach(pkg => {
                const previousPackage = pkg;
                const newPackage = dependenciesMap[pkg];
                if (json.dependencies[previousPackage]) {
                    json.dependencies[newPackage] = version;
                    delete json.dependencies[previousPackage];
                }
            });
            if (json.devDependencies['@portinari/tslint']) {
                json.devDependencies['@po-ui/ng-tslint'] = '2.0.0';
                delete json.devDependencies['@portinari/tslint'];
            }
            json.dependencies = (0, package_config_1.sortObjectByKeys)(json.dependencies);
            json.devDependencies = (0, package_config_1.sortObjectByKeys)(json.devDependencies);
            tree.overwrite('package.json', JSON.stringify(json, null, 2));
        }
        return tree;
    };
}
exports.updatePackageJson = updatePackageJson;
//# sourceMappingURL=index.js.map