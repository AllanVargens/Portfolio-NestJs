import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsService } from './projects.service';
import { PrismaService } from '../prisma/prisma.service';
import {
  createDtoMock,
  fakeProjects,
  prismaMock,
  updateProjectDto,
} from './projects.mock';

describe('ProjectsService', () => {
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

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new project', async () => {
      prisma.project.findFirst = jest.fn().mockResolvedValue(false);
      const response = await service.create(createDtoMock);
      expect(response).toBe(createDtoMock);
      expect(prisma.project.create).toHaveBeenCalledTimes(1);
      expect(prisma.project.create).toHaveBeenCalledWith({
        data: createDtoMock,
      });
    });
  });

  describe('findAll', () => {
    it(`should return an array of project`, async () => {
      const response = await service.findAll();

      expect(response).toEqual(fakeProjects);
      expect(prisma.project.findMany).toHaveBeenCalledTimes(1);
      expect(prisma.project.findMany).toHaveBeenCalledWith();
    });
  });

  describe('findOne', () => {
    it(`should return a single project`, async () => {
      const response = await service.findOne(1);

      expect(response).toEqual(fakeProjects[0]);
      expect(prisma.project.findUnique).toHaveBeenCalledTimes(1);
      expect(prisma.project.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it(`should return nothing when project is not found`, async () => {
      jest.spyOn(prisma.project, 'findUnique').mockResolvedValue(undefined);

      const response = await service.findOne(99);

      expect(response).toBeUndefined();
      expect(prisma.project.findUnique).toHaveBeenCalledTimes(1);
      expect(prisma.project.findUnique).toHaveBeenCalledWith({
        where: { id: 99 },
      });
    });
  });

  describe('update', () => {
    it('should update project', async () => {
      prisma.project.findFirst = jest.fn().mockResolvedValue(true);
      const response = await service.update(2, updateProjectDto);

      expect(response).toEqual(updateProjectDto);
      expect(prisma.project.update).toHaveBeenCalledTimes(1);
      expect(prisma.project.update).toHaveBeenCalledWith({
        where: { id: 2 },
        data: updateProjectDto,
      });
    });
  });

  describe('delete', () => {
    it('should delete project', async () => {
      prisma.project.delete = jest.fn().mockResolvedValue(true);
      const response = await service.remove(2);

      expect(response).toBe(true);
      expect(prisma.project.delete).toHaveBeenCalledTimes(1);
      expect(prisma.project.delete).toHaveBeenCalledWith({
        where: { id: 2 },
      });
    });
  });
});
