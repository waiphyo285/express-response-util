"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseUtils = void 0;
var status_1 = require("./status");
var STATUS_200 = status_1.StatusCode[200];
var STATUS_400 = status_1.StatusCode[400];
var resSuccess = function (res, options) {
    options.status = options.status || STATUS_200.code;
    options.message = options.message || STATUS_200.message;
    options.description = options.description || STATUS_200.description;
    res.status(Number(options.status)).json(options);
};
var resFailed = function (res, options) {
    options.status = options.status || STATUS_400.code;
    options.message = options.message || STATUS_400.message;
    options.description = options.description || STATUS_400.description;
    res.status(Number(options.status)).json(options);
};
function responseUtils(req, res, next) {
    res.success = function (data, status, message) {
        return resSuccess(res, { data: data, status: status, message: message });
    };
    res.failed = function (error, status, message) {
        return resFailed(res, { error: error, status: status, message: message });
    };
    return next();
}
exports.responseUtils = responseUtils;
