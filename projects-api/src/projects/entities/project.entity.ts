import { Prisma } from '@prisma/client';

export class Project {
  id: number;
  title: string;
  description: string;
  projectUrl: string;
  userImage: string;
  tagsBack: string[];
  backendAbout: string;
  tagsFront: string[];
  frontendAbout: string;
  sections: Prisma.SectionUncheckedCreateNestedManyWithoutProjectInput;
  user: Prisma.UserCreateNestedOneWithoutProjectsInput;
}
