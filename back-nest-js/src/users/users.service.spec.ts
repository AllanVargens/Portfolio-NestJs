import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { PrismaService } from "../prisma/prisma.service";
import {
  createDtoMock,
  fakeUsers,
  prismaMock,
  prismaSelectQuery,
  selectedResponseMock,
} from "./user.mock";
import { ConflictException, NotFoundException } from "@nestjs/common";
import { passwordHasher } from "../utils/encrypt.utils";

describe("UsersService", () => {
  let service: UsersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("create", () => {
    it("should create a new user", async () => {
      prisma.user.findFirst = jest.fn().mockResolvedValue(false);
      const response = await service.create(createDtoMock);
      expect(response).toBe(selectedResponseMock);
      expect(prisma.user.create).toHaveBeenCalledTimes(1);
    });

    it("should get user already created exception", async () => {
      const { name, username, email } = createDtoMock;

      try {
        await service.create(createDtoMock);
      } catch (error) {
        expect(error).toEqual(new ConflictException("User already created"));
      }

      expect(prisma.user.findFirst).toHaveBeenCalledWith({
        where: {
          name,
          username,
          email,
        },
      });
    });
  });

  describe("findAll", () => {
    it("should get all users", async () => {
      jest
        .spyOn(service, "findAll")
        .mockImplementation(
          (): Promise<any> => Promise.resolve(selectedResponseMock)
        );
      expect(await service.findAll()).toBe(selectedResponseMock);
    });
  });

  describe("findOne", () => {
    it("should get one user", async () => {
      prisma.user.findUnique = jest.fn().mockResolvedValue(fakeUsers[0]);
      const response = await service.findOne(fakeUsers[0].id);
      expect(response).toBe(fakeUsers[0]);
      expect(prisma.user.findUnique).toHaveBeenCalledTimes(1);
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: {
          id: fakeUsers[0].id,
        },
        select: prismaSelectQuery,
      });
    });
  });

  describe("update", () => {
    const updateDtoUser = {
      name: "test update",
      email: "test-update@mail.com",
      username: "test_update",
      password: "update123",
    };
    it("should update a user", async () => {
      prisma.user.findUnique = jest.fn().mockResolvedValue(fakeUsers[0].id);
      prisma.user.update = jest.fn().mockResolvedValue(fakeUsers[0]);
      const response = await service.update(fakeUsers[0].id, updateDtoUser);
      if (updateDtoUser.password) {
        const { hash } = await passwordHasher(updateDtoUser.password);
        fakeUsers[0].password = hash;
      }
      expect(response).toBe(fakeUsers[0]);
      expect(prisma.user.update).toHaveBeenCalledTimes(1);
      expect(prisma.user.update).toHaveBeenCalledWith({
        where: {
          id: fakeUsers[0].id,
        },
        data: updateDtoUser,
        select: prismaSelectQuery,
      });
    });
    it("should return user not found exception", async () => {
      try {
        jest.spyOn(prisma.user, "findUnique").mockResolvedValue(null);
        await service.update("wuqeiuh12ueh123eu239e", updateDtoUser);
      } catch (error) {
        expect(error).toEqual(new NotFoundException("User not found"));
      }
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: {
          id: "wuqeiuh12ueh123eu239e",
        },
      });
    });
  });
});
