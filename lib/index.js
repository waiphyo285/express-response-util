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
var resStatusCode = function (code) {
    return status_1.StatusCode[code];
};
function responseUtils(req, res, next) {
    res.success = function (data, status, message) {
        return resSuccess(res, { data: data, status: status, message: message });
    };
    res.failed = function (error, status, message) {
        return resFailed(res, { error: error, status: status, message: message });
    };
    res.created = function (data) {
        var statusCode = resStatusCode('201');
        return resSuccess(res, {
            data: data,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.noContent = function (data) {
        var statusCode = resStatusCode('204');
        return resSuccess(res, {
            data: data,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.unauthorized = function (error) {
        var statusCode = resStatusCode('401');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.forbidden = function (error) {
        var statusCode = resStatusCode('403');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.notFound = function (error) {
        var statusCode = resStatusCode('404');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.notAllowed = function (error) {
        var statusCode = resStatusCode('405');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.notAcceptable = function (error) {
        var statusCode = resStatusCode('406');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.unauthorizedProxy = function (error) {
        var statusCode = resStatusCode('407');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.requestTimeout = function (error) {
        var statusCode = resStatusCode('408');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.conflict = function (error) {
        var statusCode = resStatusCode('409');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.invalid = function (error) {
        var statusCode = resStatusCode('422');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.serverError = function (error) {
        var statusCode = resStatusCode('500');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.notImplemented = function (error) {
        var statusCode = resStatusCode('501');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.badGateway = function (error) {
        var statusCode = resStatusCode('502');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.unavailable = function (error) {
        var statusCode = resStatusCode('503');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.gatewayTimeout = function (error) {
        var statusCode = resStatusCode('504');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    res.notSupported = function (error) {
        var statusCode = resStatusCode('505');
        return resFailed(res, {
            error: error,
            status: statusCode.code,
            message: statusCode.message,
            description: statusCode.description,
        });
    };
    return next();
}
exports.responseUtils = responseUtils;
