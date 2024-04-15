import { Test, TestingModule } from "@nestjs/testing";
import { ProjectsService } from "./projects.service";
import { PrismaService } from "src/prisma/prisma.service";

describe("ProjectsService", () => {
  let service: ProjectsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsService],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
