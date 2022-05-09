import { User } from '@prisma/client';
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

  public async getById(id: number): Promise<User | null> {
    return await prisma.user.findUnique({ 
      where: { id }
    });
  }

  public async create(data: User): Promise<User> {
    return await prisma.user.create({ data });
  }

  public async update(id: number, data: Partial<User>): Promise<User> {
    return await prisma.user.update({
      where: { id },
      data,
    });
  }

  public async delete(id: number): Promise<User> {
    return await prisma.user.delete({ where: { id }});
  }
}

const usersDAO = UsersDAO.getInstance();

Object.freeze(usersDAO);

export { usersDAO };
