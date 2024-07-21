import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardProjectComponent } from '../card-project/card-project.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

type Project = {
  name: string;
  image: string;
};

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

  ngOnInit() {
    this.projects = [
      {
        name: 'Project 1',
        image: 'imagem-aleatoria.png',
      },
      {
        name: 'Project 2',
        image: 'imagem-aleatoria.png',
      },
      {
        name: 'Project 3',
        image: 'imagem-aleatoria.png',
      },
      {
        name: 'Project 4',
        image: 'imagem-aleatoria.png',
      },
      {
        name: 'Project 5',
        image: 'imagem-aleatoria.png',
      },
      {
        name: 'Project 6',
        image: 'imagem-aleatoria.png',
      },
    ];
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
