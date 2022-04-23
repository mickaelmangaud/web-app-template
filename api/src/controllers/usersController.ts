import { usersDAO } from "../dao";

class UsersController {
  private static instance: UsersController;

  private constructor() {}

  public static getInstance() {
    if (!UsersController.instance) {
      UsersController.instance = new UsersController();
    }
    return UsersController.instance;
  }

  async getAllUsers() {
    return await usersDAO.getAll()
  }
}

const usersController = UsersController.getInstance();

Object.freeze(usersController);

export {
  usersController
}