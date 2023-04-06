import { Request, Response, NextFunction } from 'express';
import { StatusCode } from './status';

const STATUS_200 = StatusCode[200];
const STATUS_400 = StatusCode[400];

type Options = {
  status?: string | number;
  message?: string | string[];
  description?: string | string[];
  data?: string | object | any[] | null;
  error?: string | object | any[] | null;
};

interface MyRequest extends Request {}

interface MyResponse extends Response {
  success: (data: any) => void;
  failed: (error: any) => void;

  created: (data: any) => void;
  noContent: (data: any) => void;

  unauthorized: (error: any) => void;
  forbidden: (error: any) => void;
  notFound: (error: any) => void;
  notAllowed: (error: any) => void;
  notAcceptable: (error: any) => void;
  unauthorizedProxy: (error: any) => void;
  requestTimeout: (error: any) => void;
  conflict: (error: any) => void;
  invalid: (error: any) => void;

  serverError: (error: any) => void;
  notImplemented: (error: any) => void;
  badGateway: (error: any) => void;
  unavailable: (error: any) => void;
  gatewayTimeout: (error: any) => void;
  notSupported: (error: any) => void;
}

const resSuccess = (res: MyResponse, options: Options) => {
  options.status = options.status || STATUS_200.code;
  options.message = options.message || STATUS_200.message;
  options.description = options.description || STATUS_200.description;

  res.status(Number(options.status)).json(options);
};

const resFailed = (res: MyResponse, options: Options) => {
  options.status = options.status || STATUS_400.code;
  options.message = options.message || STATUS_400.message;
  options.description = options.description || STATUS_400.description;

  res.status(Number(options.status)).json(options);
};

const resStatusCode = (code: string) => {
  return StatusCode[code as keyof typeof StatusCode];
};

export function responseUtils(req: MyRequest, res: MyResponse, next: NextFunction) {
  res.success = (data: any, status?: string | number, message?: string | string[]) => {
    return resSuccess(res, { data, status, message });
  };

  res.failed = (error: any, status?: string | number, message?: string | string[]) => {
    return resFailed(res, { error, status, message });
  };

  res.created = (data: any) => {
    const statusCode = resStatusCode('201');

    return resSuccess(res, {
      data,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.noContent = (data: any) => {
    const statusCode = resStatusCode('204');

    return resSuccess(res, {
      data,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.unauthorized = (error: any) => {
    const statusCode = resStatusCode('401');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.forbidden = (error: any) => {
    const statusCode = resStatusCode('403');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.notFound = (error: any) => {
    const statusCode = resStatusCode('404');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.notAllowed = (error: any) => {
    const statusCode = resStatusCode('405');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.notAcceptable = (error: any) => {
    const statusCode = resStatusCode('406');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.unauthorizedProxy = (error: any) => {
    const statusCode = resStatusCode('407');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.requestTimeout = (error: any) => {
    const statusCode = resStatusCode('408');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.conflict = (error: any) => {
    const statusCode = resStatusCode('409');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.invalid = (error: any) => {
    const statusCode = resStatusCode('422');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.serverError = (error: any) => {
    const statusCode = resStatusCode('500');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.notImplemented = (error: any) => {
    const statusCode = resStatusCode('501');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.badGateway = (error: any) => {
    const statusCode = resStatusCode('502');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.unavailable = (error: any) => {
    const statusCode = resStatusCode('503');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.gatewayTimeout = (error: any) => {
    const statusCode = resStatusCode('504');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  res.notSupported = (error: any) => {
    const statusCode = resStatusCode('505');

    return resFailed(res, {
      error,
      status: statusCode.code,
      message: statusCode.message,
      description: statusCode.description,
    });
  };

  return next();
}
