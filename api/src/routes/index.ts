import { Application } from "express";
import { usersRouter } from "./users";

const configureRoutes = (app: Application) => {
  app.use('/users', usersRouter);
}

export {
  configureRoutes,
}