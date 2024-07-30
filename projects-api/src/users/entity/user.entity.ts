import { Prisma } from '@prisma/client';
import { Entity } from 'typeorm';

@Entity()
export class User implements Prisma.UserUncheckedCreateInput {
  id?: string;
  name: string;
  username: string;
  description: string;
  email: string;
  password: string;
  userImage?: string;
  about?: string;
  technologiesBack?: Prisma.UserCreatetechnologiesBackInput | string[];
  technologiesFront?: Prisma.UserCreatetechnologiesFrontInput | string[];
  role?: string;
  projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutUserInput;
  linkedin?: string;
  gitHub?: string;
}
