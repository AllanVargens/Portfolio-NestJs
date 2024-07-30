import { ResponseUserDto } from './dto/ResponseUserDto';
import { User } from './entity/user.entity';

export const fakeUsers: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    username: 'admin',
    password: 'admin',
    description: 'teste',
    name: 'Admin',
    role: 'admin',
  },
  {
    id: '2',
    email: 'user@example.com',
    username: 'user',
    description: 'teste',
    password: 'user',
    name: 'User',
    role: 'user',
  },
];

export const prismaSelectQuery = {
  id: true,
  email: true,
  username: true,
  name: true,
  role: true,
};

export const selectedResponseMock: ResponseUserDto = {
  id: 'mock',
  email: 'mock',
  username: 'mock',
  name: 'mock',
  role: 'mock',
};

export const prismaMock = {
  user: {
    create: jest.fn().mockReturnValue(fakeUsers[0]),
    findMany: jest.fn().mockResolvedValue(fakeUsers),
    findUnique: jest.fn().mockResolvedValue(fakeUsers[0]),
    update: jest.fn().mockResolvedValue(fakeUsers[0]),
    delete: jest.fn(), // O método delete não retorna nada
  },
};
