import { Test, TestingModule } from "@nestjs/testing";
import { ProjectsService } from "./projects.service";
import { PrismaService } from "../prisma/prisma.service";
import {
  createDtoMock,
  prismaMock,
  selectedResponseMock,
} from "./project.mock";
import { ConflictException } from "@nestjs/common";

describe("ProjectsService", () => {
  let service: ProjectsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectsService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("create", () => {
    it("should create a new project", async () => {
      prisma.projects.findFirst = jest.fn().mockResolvedValue(false);
      const response = await service.create(createDtoMock);
      expect(response).toBe(selectedResponseMock);
      expect(prisma.projects.create).toHaveBeenCalledTimes(1);
    });

    it("should get project already created exception", async () => {
      const { ImageURL, description, link, project_name, user_id } =
        createDtoMock;

      try {
        await service.create(createDtoMock);
      } catch (error) {
        expect(error).toEqual(new ConflictException("project already created"));
      }

      expect(prisma.projects.findUnique).toHaveBeenCalledWith({
        where: {
          ImageURL,
          description,
          link,
          id: user_id,
          project_name,
        },
      });
    });
  });
});
