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

export function responseUtils(req: MyRequest, res: MyResponse, next: NextFunction) {
  res.success = (data: any, status?: string | number, message?: string | string[]) => {
    return resSuccess(res, { data, status, message });
  };

  res.failed = (error: any, status?: string | number, message?: string | string[]) => {
    return resFailed(res, { error, status, message });
  };

  return next();
}
