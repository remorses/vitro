"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.toRequireContextString = exports.toRequireContext = void 0;
var glob_base_1 = __importDefault(require("glob-base"));
var micromatch_1 = require("micromatch");
var isObject = function (val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
};
exports.toRequireContext = function (input) {
    switch (true) {
        case typeof input === 'string': {
            var _a = glob_base_1["default"](input), base = _a.base, glob = _a.glob;
            var regex = micromatch_1.makeRe(glob)
                .toString()
                // webpack prepends the relative path with './'
                .replace(/^\/\^/, '/^\\.\\/')
                .replace(/\?:\^/g, '?:');
            return {
                path: base,
                recursive: glob.startsWith('**'),
                match: regex
            };
        }
        case isObject(input): {
            return input;
        }
        default: {
            throw new Error('the provided input cannot be transformed into a require.context');
        }
    }
};
exports.toRequireContextString = function (input) {
    var _a = exports.toRequireContext(input), p = _a.path, r = _a.recursive, m = _a.match;
    return "require.context('" + p + "', " + r + ", " + m + ")";
};
