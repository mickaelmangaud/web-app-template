import express, { Application } from 'express';
import helmet from 'helmet';

export const setupMiddlewares = (app: Application) => {
  if (process.env.NODE_ENV === 'development') {
    app.use(helmet());
  }

  app.use(express.json());
};

export { errorHandler } from './errorHandler';
