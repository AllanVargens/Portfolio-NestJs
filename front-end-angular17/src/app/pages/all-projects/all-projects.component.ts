import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../types/project.type';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [CardProjectComponent, CommonModule],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss',
})
export class AllProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) {}
  ngOnInit(): void {
    this.projects = this.projectService.getProjects()!;
    console.log(this.projects);
  }
}
