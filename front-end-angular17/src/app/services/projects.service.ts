import { Injectable } from '@angular/core';
import { Project } from '../types/project.type';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      project_id: '1',
      title: 'PortfolioAPI',
      description: 'A comprehensive API for managing portfolio data.',
      tags_back: ['JavaScript', 'Java', 'Python', 'Angular', 'React'],
      backend_about:
        'The backend of PortfolioAPI was created using Java for its robust performance and security features. It integrates with multiple databases and uses Spring Boot for rapid development.',
      tags_front: ['JavaScript', 'Angular'],
      frontend_about:
        'The frontend of PortfolioAPI was built using Angular for its powerful two-way data binding and modular architecture. It ensures a smooth and responsive user experience.',
      sections: [
        {
          imageURL: 'https://example.com/image1.jpg',
          description:
            'This is a screenshot of the main dashboard displaying user statistics and recent activities.',
        },
        {
          imageURL: 'https://example.com/image1.jpg',
          description:
            'This is a screenshot of the main dashboard displaying user statistics and recent activities.',
        },
        {
          imageURL: 'https://example.com/image1.jpg',
          description:
            'This is a screenshot of the main dashboard displaying user statistics and recent activities.',
        },
      ],
      project_url: 'project.com',
      github_project: 'github.com',
      youtube_video: '',
    },
    {
      project_id: '2',
      title: 'E-Commerce Platform',
      description: 'A scalable e-commerce platform with advanced features.',
      tags_back: ['Node.js', 'Express', 'MongoDB'],
      backend_about:
        'The backend of the e-commerce platform utilizes Node.js and Express for its non-blocking, event-driven architecture. MongoDB is used for its flexibility in handling large datasets.',
      tags_front: ['JavaScript', 'React'],
      frontend_about:
        'React was chosen for the frontend due to its component-based architecture, allowing for reusable and maintainable code. The UI is designed to be user-friendly and highly responsive.',
      sections: [
        {
          imageURL: 'https://example.com/image2.jpg',
          description:
            'A detailed view of the product listing page with various filtering options.',
        },
      ],
      project_url: '',
      github_project: '',
      youtube_video: '',
    },
    {
      project_id: '3',
      title: 'Social Media App',
      description: 'A social media application with real-time features.',
      tags_back: ['Python', 'Django', 'PostgreSQL'],
      backend_about:
        'The backend leverages Django for its rapid development and clean design. PostgreSQL is used for its powerful and reliable database features.',
      tags_front: ['JavaScript', 'Vue.js'],
      frontend_about:
        'Vue.js is utilized on the frontend for its simplicity and flexibility. The app provides a seamless and interactive user experience with real-time updates.',
      sections: [
        {
          imageURL: 'https://example.com/image3.jpg',
          description:
            'The user profile page showcasing user information and recent posts.',
        },
      ],
      project_url: '',
      github_project: '',
      youtube_video: '',
    },
    {
      project_id: '4',
      title: 'Task Management Tool',
      description: 'A tool to manage tasks and projects efficiently.',
      tags_back: ['Ruby', 'Rails', 'SQLite'],
      backend_about:
        'Built with Ruby on Rails, the backend provides a quick and efficient way to handle project management tasks. SQLite is used for lightweight and fast database operations.',
      tags_front: ['JavaScript', 'Ember.js'],
      frontend_about:
        'Ember.js is chosen for the frontend for its strong conventions and out-of-the-box features. The tool offers a rich and interactive user interface.',
      sections: [
        {
          imageURL: 'https://example.com/image4.jpg',
          description:
            'A view of the task management dashboard with various projects and tasks listed.',
        },
      ],
      project_url: '',
      github_project: '',
      youtube_video: '',
    },
    {
      project_id: '5',
      title: 'Fitness Tracker',
      description:
        'An application to track fitness activities and health metrics.',
      tags_back: ['Go', 'Gin', 'MySQL'],
      backend_about:
        'The backend uses Go for its high performance and Gin framework for its minimalistic approach. MySQL is chosen for reliable and efficient data storage.',
      tags_front: ['JavaScript', 'Svelte'],
      frontend_about:
        'Svelte is used on the frontend for its highly reactive nature and lean architecture. The app provides an intuitive and engaging user experience for tracking fitness goals.',
      sections: [
        {
          imageURL: 'https://example.com/image5.jpg',
          description:
            'A graphical representation of fitness activities over the past week.',
        },
      ],
      project_url: '',
      github_project: '',
      youtube_video: '',
    },
  ];
  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string) {
    return this.projects.find((project) => project.project_id === id);
  }
}
