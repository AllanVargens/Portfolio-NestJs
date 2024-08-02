import { CreateSectionDto } from './dto/create-section.dto';
import { Section } from './entities/section.entity';

export const fakeProject = {
  id: 2,
  title: 'Project Two',
  description: 'Description for project two',
  projectUrl: 'https://projecttwo.com',
  githubUrl: 'https://github.com/projecttwo',
  projectImage: 'https://image.com/projecttwo.png',
  projectVideo: 'https://video.com/projecttwo.mp4',
  tagsBack: ['Java', 'Spring'],
  backendAbout: 'Backend description for project two',
  tagsFront: ['Angular', 'NgRx'],
  frontendAbout: 'Frontend description for project two',
  userId: 'user2',
};

export const createSectionDtoMock: CreateSectionDto = {
  imageURL: 'https://image.com/newsection.png',
  description: 'Description for the new section',
  projectId: 1,
};

export const fakeSections: Section[] = [
  {
    id: 1,
    imageURL: 'https://image.com/section1.png',
    description: 'Description for section one',
    projectId: 2,
  },
  {
    id: 2,
    imageURL: 'https://image.com/section2.png',
    description: 'Description for section two',
    projectId: 2,
  },
  {
    id: 3,
    imageURL: 'https://image.com/section3.png',
    description: 'Description for section three',
    projectId: 2,
  },
  {
    id: 4,
    imageURL: 'https://image.com/section4.png',
    description: 'Description for section four',
    projectId: 2,
  },
  {
    id: 5,
    imageURL: 'https://image.com/section5.png',
    description: 'Description for section five',
    projectId: 2,
  },
];

export const prismaMock = {
  section: {
    findMany: jest.fn().mockResolvedValue(fakeSections),
    findUnique: jest.fn().mockResolvedValue(fakeSections[0]),
    create: jest.fn().mockResolvedValue(createSectionDtoMock),
    update: jest.fn().mockResolvedValue(fakeSections[0]),
    delete: jest.fn(), // O método delete não retorna nada
  },
  project: {
    findMany: jest.fn().mockResolvedValue(fakeProject),
    findUnique: jest.fn().mockResolvedValue(fakeProject),
    findfirst: jest.fn().mockResolvedValue(fakeProject),
    update: jest.fn().mockResolvedValue(fakeProject),
    delete: jest.fn(), // O método delete não retorna nada
  },
};
