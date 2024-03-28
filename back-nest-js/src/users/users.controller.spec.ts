import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { PrismaService } from "../prisma/prisma.service";
import { createDtoMock, selectedResponseMock } from "./user.mock";
import { UpdateUserDto } from "./dto/update-user.dto";

describe("UsersController", () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, PrismaService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("create", () => {
    it("should return user on creation", async () => {
      jest
        .spyOn(service, "create")
        .mockImplementation(
          (): Promise<any> => Promise.resolve(selectedResponseMock)
        );
      expect(await controller.create(createDtoMock)).toBe(selectedResponseMock);
    });
  });

  describe("findAll", () => {
    it("should return all users on finded", async () => {
      jest
        .spyOn(service, "findAll")
        .mockImplementation(
          (): Promise<any> => Promise.resolve(selectedResponseMock)
        );
      expect(await controller.findAll()).toBe(selectedResponseMock);
    });
  });

  describe("findOne", () => {
    it("should return user finded", async () => {
      jest
        .spyOn(service, "findOne")
        .mockImplementation(
          (id: string): Promise<any> => Promise.resolve(selectedResponseMock)
        );
      expect(await controller.findOne("mock1")).toBe(selectedResponseMock);
    });

    it("should throw error if user not found", async () => {
      jest
        .spyOn(service, "findOne")
        .mockImplementation(
          (id: string): Promise<any> => Promise.resolve(null)
        );
      expect(await controller.findOne("anythingValue")).toBe(null);
    });
  });

  describe("update", () => {
    const updateInfos = {
      name: "test update",
      email: "test-update@mail.com",
      username: "test_update",
      password: "<PASSWORD>",
    };
    it("should return user updated", async () => {
      jest
        .spyOn(service, "update")
        .mockImplementation(
          (id: string, updateUserDto: UpdateUserDto): Promise<any> =>
            Promise.resolve(selectedResponseMock)
        );
      expect(await controller.update("mock1", updateInfos)).toBe(
        selectedResponseMock
      );
    });

    it("should throw error if user not found", async () => {
      jest
        .spyOn(service, "update")
        .mockImplementation(
          (id: string, updateUserDto: UpdateUserDto): Promise<any> =>
            Promise.resolve(null)
        );
      expect(await controller.update("anythingValue", updateInfos)).toBe(null);
    });
  });

  describe("remove", () => {
    it("should return user removed", async () => {
      jest
        .spyOn(service, "remove")
        .mockImplementation(
          (id: string): Promise<any> => Promise.resolve(selectedResponseMock)
        );
      expect(await controller.remove("mock1")).toBe(selectedResponseMock);
    });

    it("should throw error if user not found", async () => {
      jest
        .spyOn(service, "remove")
        .mockImplementation(
          (id: string): Promise<any> => Promise.resolve(null)
        );
      expect(await controller.remove("anythingValue")).toBe(null);
    });
  });
});
