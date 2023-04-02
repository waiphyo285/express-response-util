import { Request, Response, NextFunction } from 'express';
interface MyRequest extends Request {
}
interface MyResponse extends Response {
    success: (data: any) => void;
    failed: (error: any) => void;
}
export declare function responseUtils(req: MyRequest, res: MyResponse, next: NextFunction): void;
export {};
