import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss',
})
export class CardProjectComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() id: string = '';
}
