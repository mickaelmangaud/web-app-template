import { User } from '@prisma/client';
import { usersDAO } from '../dao';

class UsersController {
  private static instance: UsersController;

  private constructor() {}

  public static getInstance() {
    if (!UsersController.instance) {
      UsersController.instance = new UsersController();
    }
    return UsersController.instance;
  }

  public async getAllUsers() {
    return await usersDAO.getAll();
  }

  public async create(data: User): Promise<User> {
    return await usersDAO.create(data);
  }
}

const usersController = UsersController.getInstance();

Object.freeze(usersController);

export { usersController };
