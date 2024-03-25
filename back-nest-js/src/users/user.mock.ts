import { CreateUserDto } from "./dto/create-user.dto";
import { ResponseUserObject } from "./dto/response-user.object";
import { User } from "./entities/user.entity";

export const fakeUsers: User[] = [
  {
    id: "1",
    name: "teste1",
    username: "username",
    email: "teste1@example.com",
    password: "senha123",
  },
  {
    id: "2",
    name: "teste2",
    username: "username2",
    email: "teste2@example.com",
    password: "senha123",
  },
  {
    id: "3",
    name: "teste2",
    username: "username3",
    email: "teste3@example.com",
    password: "senha123",
  },
];

export const createDtoMock: CreateUserDto = {
  name: "mock",
  username: "mock",
  email: "mock",
  password: "mock",
};

export const selectedResponseMock: ResponseUserObject = {
  id: "mock",
  name: "mock",
  username: "mock",
  email: "mock",
};

export const prismaSelectQuery = {
  id: true,
  name: true,
  username: true,
  email: true,
};
export const prismaMock = {
  user: {
    create: jest.fn().mockReturnValue(selectedResponseMock),
    findMany: jest.fn().mockResolvedValue(fakeUsers),
    findUnique: jest.fn().mockResolvedValue(fakeUsers[0]),
    findFirst: jest.fn().mockResolvedValue(fakeUsers[0]),
    update: jest.fn().mockResolvedValue(fakeUsers[0]),
    delete: jest.fn(),
  },
};
