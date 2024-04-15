import { CreateProjectDto } from "./dto/create-project.dto";
import { ResponseProjectObjetct } from "./dto/response-project.object";
import { Project } from "./entities/project.entity";
import { fakeUsers } from "../users/user.mock";

export const fakeProjects: Project[] = [
  {
    id: "1",
    project_name: "project1",
    description: "description1",
    link: "link1",
    ImageURL: ["image1", "image2", "image3"],
    username: fakeUsers[0].username,
    user_id: fakeUsers[0].id,
  },
  {
    id: "2",
    project_name: "project2",
    description: "description2",
    link: "link2",
    ImageURL: ["image1", "image2"],
    username: fakeUsers[1].username,
    user_id: fakeUsers[1].id,
  },
  {
    id: "3",
    project_name: "project3",
    description: "description3",
    link: "link3",
    ImageURL: ["image1"],
    username: fakeUsers[3].username,
    user_id: fakeUsers[3].id,
  },
];

export const createDtoMock: CreateProjectDto = {
  project_name: "mock",
  description: "mock",
  ImageURL: ["image1", "image2", "image3"],
  link: "mock",
  username: fakeUsers[3].username,
  user_id: fakeUsers[3].id,
};

export const selectedResponseMock: ResponseProjectObjetct = {
  id: "mock",
  project_name: "mock",
  description: "mock",
  link: "mock",
  ImageURL: ["mock", "mock", "mock"],
  username: fakeUsers[0].username,
  user_id: fakeUsers[0].id,
};

export const prismaSelectQuery = {
  id: true,
  project_name: true,
  description: true,
  link: true,
  ImageURL: true,
  username: true,
  user_id: true,
};

export const prismaMock = {
  project: {
    create: jest.fn().mockRejectedValue(selectedResponseMock),
    findMany: jest.fn().mockResolvedValue(fakeProjects),
    findUnique: jest.fn().mockResolvedValue(fakeProjects[0]),
    update: jest.fn().mockResolvedValue(fakeProjects[0]),
    delete: jest.fn(),
  },
};
