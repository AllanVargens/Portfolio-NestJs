import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardProjectComponent } from '../card-project/card-project.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Project } from '../../types/project.type';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-bar',
  standalone: true,
  imports: [CardProjectComponent, CommonModule, NgOptimizedImage],
  templateUrl: './project-bar.component.html',
  styleUrl: './project-bar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectBarComponent {
  projects: Project[] = [];
  swiperEl: any;

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.swiperEl = document.querySelector('swiper-container');
    Object.assign(this.swiperEl, {
      slidesPerView: 2,
      spaceBetween: 5,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
      },
    });
    this.swiperEl.initialize();
  }
}
