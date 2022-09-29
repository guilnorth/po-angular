"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortObjectByKeys = exports.getPackageVersionFromPackageJson = exports.updatePackageJson = exports.addPackageToPackageJson = void 0;
/** Adds a package to the package.json in the given host tree. */
function addPackageToPackageJson(host, pkg, version) {
    if (host.exists('package.json')) {
        const sourceText = host.read('package.json').toString('utf-8');
        const json = JSON.parse(sourceText);
        if (!json.dependencies) {
            json.dependencies = {};
        }
        if (!json.dependencies[pkg]) {
            json.dependencies[pkg] = version;
            json.dependencies = sortObjectByKeys(json.dependencies);
        }
        host.overwrite('package.json', JSON.stringify(json, null, 2));
    }
    return host;
}
exports.addPackageToPackageJson = addPackageToPackageJson;
// Atualiza os pacotes pela versão
function updatePackageJson(version, { dependencies, devDependencies }) {
    return (tree) => {
        if (tree.exists('package.json')) {
            const sourceText = tree.read('package.json').toString('utf-8');
            const json = JSON.parse(sourceText);
            if (!json.dependencies) {
                json.dependencies = {};
            }
            dependencies === null || dependencies === void 0 ? void 0 : dependencies.forEach(pkg => {
                if (json.dependencies[pkg]) {
                    json.dependencies[pkg] = version;
                }
            });
            devDependencies === null || devDependencies === void 0 ? void 0 : devDependencies.forEach(devDependency => {
                const updatedDependency = typeof devDependency === 'object' ? devDependency : { package: devDependency, version };
                if (json.devDependencies[updatedDependency.package]) {
                    json.devDependencies[updatedDependency.package] = updatedDependency.version;
                }
            });
            json.dependencies = sortObjectByKeys(json.dependencies);
            json.devDependencies = sortObjectByKeys(json.devDependencies);
            tree.overwrite('package.json', JSON.stringify(json, null, 2));
        }
        return tree;
    };
}
exports.updatePackageJson = updatePackageJson;
/** Gets the version of the specified package by looking at the package.json in the given tree. */
function getPackageVersionFromPackageJson(tree, name) {
    if (!tree.exists('package.json')) {
        return null;
    }
    const packageJson = JSON.parse(tree.read('package.json').toString('utf8'));
    if (packageJson.dependencies && packageJson.dependencies[name]) {
        return packageJson.dependencies[name];
    }
    return null;
}
exports.getPackageVersionFromPackageJson = getPackageVersionFromPackageJson;
/**
 * Sorts the keys of the given object.
 * @returns A new object instance with sorted keys
 */
function sortObjectByKeys(obj) {
    return Object.keys(obj)
        .sort()
        .reduce((result, key) => (result[key] = obj[key]) && result, {});
}
exports.sortObjectByKeys = sortObjectByKeys;
//# sourceMappingURL=package-config.js.map