"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsLintChanges = exports.regexPackages = exports.replaceChanges = exports.dependeciesChanges = void 0;
exports.dependeciesChanges = {
    '@portinari/portinari-sync': '@po-ui/ng-sync',
    '@portinari/portinari-storage': '@po-ui/ng-storage'
};
exports.replaceChanges = [
    {
        replace: 'portinari_sync_date',
        replaceWith: 'po_sync_date'
    }
];
exports.regexPackages = new RegExp('@portinari/portinari-((storage)|(sync))', 'g');
exports.tsLintChanges = [
    {
        replace: '@portinari/tslint',
        replaceWith: '@po-ui/ng-tslint'
    }
];
//# sourceMappingURL=changes.js.map