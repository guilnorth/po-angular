"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFile = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const parse_name_1 = require("@schematics/angular/utility/parse-name");
const project_1 = require("../project");
function buildFile(options) {
    return (host) => {
        var _a;
        const workspace = (_a = (0, project_1.getWorkspaceConfigGracefully)(host)) !== null && _a !== void 0 ? _a : {};
        const project = (0, project_1.getProjectFromWorkspace)(workspace, options.project);
        if (options.path === undefined && project) {
            options.path = (0, project_1.getDefaultPath)(project);
        }
        const parsedPath = (0, parse_name_1.parseName)(options.path, options.name);
        options.name = parsedPath.name;
        options.path = parsedPath.path;
        validateName(options.name);
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
            (0, schematics_1.applyTemplates)(Object.assign(Object.assign({}, core_1.strings), options)),
            (0, schematics_1.move)(null, parsedPath.path)
        ]);
        return (0, schematics_1.chain)([(0, schematics_1.mergeWith)(templateSource)]);
    };
}
exports.buildFile = buildFile;
function validateName(name) {
    if (name && /^\d/.test(name)) {
        throw new schematics_1.SchematicsException(core_1.tags.oneLine `name (${name})
        can not start with a digit.`);
    }
}
//# sourceMappingURL=build-file.js.map