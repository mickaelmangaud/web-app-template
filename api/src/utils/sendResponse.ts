import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const sendResponse = (res: Response, statusCode: StatusCodes, payload: any) => {
  res.status(statusCode).json(payload);
};

export {
  sendResponse
}