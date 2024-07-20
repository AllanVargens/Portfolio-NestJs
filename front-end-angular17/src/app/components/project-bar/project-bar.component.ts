import { Component } from '@angular/core';

type Project = {
  name: string;
  image: string
}

@Component({
  selector: 'app-project-bar',
  standalone: true,
  imports: [],
  templateUrl: './project-bar.component.html',
  styleUrl: './project-bar.component.scss'
})
export class ProjectBarComponent {
  projects: Project[] = [];

  ngOnInit(){
    this.projects = [{
      name: "Project 1",
      image: "imagem-aleatoria.png"
    },
    {
      name: "Project 2",
      image: "imagem-aleatoria.png"
    },
    {
      name: "Project 3",
      image: "imagem-aleatoria.png"
    },
    {
      name: "Project 4",
      image: "imagem-aleatoria.png"
    },
    {
      name: "Project 5",
      image: "imagem-aleatoria.png"
    },
    {
      name: "Project 6",
      image: "imagem-aleatoria.png"
    }]
  }
}
