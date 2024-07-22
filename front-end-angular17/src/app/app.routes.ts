import { Routes } from '@angular/router';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects/:projectId',
    component: ProjectPageComponent,
  },
];
