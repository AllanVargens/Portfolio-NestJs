import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './entities/project.entity';

export const fakeUser = {
  id: '1',
  email: 'admin@example.com',
  username: 'admin',
  password: 'admin',
  description: 'teste',
  name: 'Admin',
  role: 'admin',
};

export const fakeProjects: Project[] = [
  {
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
  },
  {
    id: 1,
    title: 'Project One',
    description: 'Description for project one',
    projectUrl: 'https://projectone.com',
    githubUrl: 'https://github.com/projectone',
    projectImage: 'https://image.com/projectone.png',
    projectVideo: 'https://video.com/projectone.mp4',
    tagsBack: ['Node.js', 'Express'],
    backendAbout: 'Backend description for project one',
    tagsFront: ['React', 'Redux'],
    frontendAbout: 'Frontend description for project one',
    userId: 'user1',
  },
];

export const createDtoMock: CreateProjectDto = {
  title: 'New Project',
  description: 'Description for the new project',
  projectUrl: 'https://newproject.com',
  githubUrl: 'https://github.com/newproject',
  projectImage: 'https://image.com/newproject.png',
  projectVideo: 'https://video.com/newproject.mp4',
  tagsBack: ['Python', 'Django'],
  backendAbout: 'Backend description for new project',
  tagsFront: ['Vue', 'Vuex'],
  frontendAbout: 'Frontend description for new project',
  userId: '1',
};

export const updateProjectDto: CreateProjectDto = {
  title: 'udpate Project',
  description: 'Description for the update project',
  projectUrl: 'https://updateproject.com',
  githubUrl: 'https://github.com/updateproject',
  tagsBack: ['Python', 'Django'],
  backendAbout: 'Backend description for update project',
  tagsFront: ['Vue', 'Vuex'],
  frontendAbout: 'Frontend description for update project',
  userId: '2',
};

export const prismaMock = {
  project: {
    create: jest.fn().mockReturnValue(createDtoMock),
    findMany: jest.fn().mockResolvedValue(fakeProjects),
    findUnique: jest.fn().mockResolvedValue(fakeProjects[0]),
    findfirst: jest.fn().mockResolvedValue(fakeProjects[0]),
    update: jest.fn().mockResolvedValue(updateProjectDto),
    delete: jest.fn(),
  },
  user: {
    create: jest.fn().mockReturnValue(fakeUser),
    findMany: jest.fn().mockResolvedValue(fakeUser),
    findUnique: jest.fn().mockResolvedValue(fakeUser),
    update: jest.fn().mockResolvedValue(fakeUser),
    delete: jest.fn(), // O método delete não retorna nada
  },
};
