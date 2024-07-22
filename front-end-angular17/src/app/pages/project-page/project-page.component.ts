import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../types/project.type';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent implements OnInit {
  project!: Project;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('projectId')!;
    this.project = this.projectService.getProjectById(id)!;
  }
}
