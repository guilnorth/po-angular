"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const build_file_1 = require("@po-ui/ng-schematics/build-file");
/** Scaffolds a new sync schema file */
function default_1(options) {
    return (0, schematics_1.chain)([createSyncSchema(options)]);
}
exports.default = default_1;
function createSyncSchema(options) {
    return (0, build_file_1.buildFile)(options);
}
//# sourceMappingURL=index.js.map