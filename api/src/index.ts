import express, { Application } from 'express';
import { configureRoutes } from './routes';

const PORT: string | number = process.env.API_PORT || 5001;
const app: Application = express();

configureRoutes(app);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});