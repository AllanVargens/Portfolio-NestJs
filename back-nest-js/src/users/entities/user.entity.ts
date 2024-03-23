import { Prisma } from "@prisma/client";
import { Entity } from "typeorm";

@Entity()
export class User implements Prisma.UserUncheckedCreateInput {
  id?: string;
  name: string;
  username: string;
  email: string;
  password: string;
  projects?: Prisma.ProjectsUncheckedCreateNestedManyWithoutUsernameInput;
}
