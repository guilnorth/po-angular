import { Tree } from '@angular-devkit/schematics';
export declare function updateToV2(): import("@angular-devkit/schematics").Rule;
export declare function updatePackageJson(version: string, dependenciesMap: {
    [key: string]: string;
}): (tree: Tree) => Tree;
