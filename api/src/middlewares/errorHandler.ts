import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export const errorHandler: ErrorRequestHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.log('ERROR HANDLER', error);
  res.status(500).json({ error });
};
