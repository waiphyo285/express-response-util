import { Request, Response, NextFunction } from 'express';
interface MyRequest extends Request {
}
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
export declare function responseUtils(req: MyRequest, res: MyResponse, next: NextFunction): void;
export {};
