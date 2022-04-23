import { Prisma, User } from '@prisma/client';
import { prisma } from '../utils';

class UsersDAO {
  private static instance: UsersDAO;

  private constructor() {}

  public static getInstance() {
    if (!UsersDAO.instance) {
      UsersDAO.instance = new UsersDAO();
    }
    return UsersDAO.instance;
  }

  public async getAll(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  public async create(user: User): Promise<User> {
    return await prisma.user.create({ data: user });
  }

  // public async update(user): Promise<User> {
    // return await prisma.user.update();
  // }
}

const usersDAO = UsersDAO.getInstance();

Object.freeze(usersDAO);

export { usersDAO };
