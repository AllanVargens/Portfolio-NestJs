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
    user_id: "1",
  },
  {
    id: "2",
    project_name: "project2",
    description: "description2",
    link: "link2",
    ImageURL: ["image1", "image2"],
    user_id: "2",
  },
  {
    id: "3",
    project_name: "project3",
    description: "description3",
    link: "link3",
    ImageURL: ["image1"],
    user_id: "3",
  },
];

export const createDtoMock: CreateProjectDto = {
  project_name: "mock",
  description: "mock",
  ImageURL: ["image1", "image2", "image3"],
  link: "mock",
  user_id: "3",
};

export const selectedResponseMock: ResponseProjectObjetct = {
  id: "mock",
  project_name: "mock",
  description: "mock",
  link: "mock",
  ImageURL: ["mock", "mock", "mock"],
  user_id: "mock",
};

export const prismaSelectQuery = {
  id: true,
  project_name: true,
  description: true,
  link: true,
  ImageURL: true,
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
