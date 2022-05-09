import express, { Application } from 'express';
import { setupMiddlewares, errorHandler } from './middlewares';
import { configureRoutes } from './routes';

const PORT: string | number = process.env.API_PORT || 5001;
const app: Application = express();

setupMiddlewares(app);

configureRoutes(app);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
