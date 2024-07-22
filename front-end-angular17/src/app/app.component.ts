import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectBarComponent } from './components/project-bar/project-bar.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, HomeComponent, ProjectPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio - Allan Vargens';
}
