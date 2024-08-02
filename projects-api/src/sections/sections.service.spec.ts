import { Test, TestingModule } from '@nestjs/testing';
import { SectionsService } from './sections.service';
import { PrismaService } from '../prisma/prisma.service';
import {
  createSectionDtoMock,
  fakeSections,
  prismaMock,
} from './sections.mock';

describe('SectionsService', () => {
  let service: SectionsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SectionsService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<SectionsService>(SectionsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new section', async () => {
      prisma.section.findFirst = jest.fn().mockResolvedValue(false);

      const response = await service.create(createSectionDtoMock);

      expect(response).toEqual(createSectionDtoMock);
      expect(prisma.section.create).toHaveBeenCalledTimes(1);
      expect(prisma.section.create).toHaveBeenCalledWith({
        data: createSectionDtoMock,
      });
    });
  });

  describe('findAll', () => {
    it('should return all sections', async () => {
      const response = await service.findAll();

      expect(response).toEqual(fakeSections);
      expect(prisma.section.findMany).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should update a section', async () => {
      prisma.section.update = jest.fn().mockResolvedValue(true);

      const response = await service.update(2, 1, {
        description: 'Updated description',
      });

      expect(response).toEqual(true);
      expect(prisma.section.update).toHaveBeenCalledTimes(1);
      expect(prisma.section.update).toHaveBeenCalledWith({
        where: {
          id: 1,
          projectId: 2,
        },
        data: { description: 'Updated description' },
      });
    });
  });

  describe('remove', () => {
    it('should remove a section', async () => {
      prisma.section.delete = jest.fn().mockResolvedValue(true);

      const response = await service.remove(2, 1);

      expect(response).toEqual(true);
      expect(prisma.section.delete).toHaveBeenCalledTimes(1);
      expect(prisma.section.delete).toHaveBeenCalledWith({
        where: {
          id: 1,
          projectId: 2,
        },
      });
    });
  });
});
