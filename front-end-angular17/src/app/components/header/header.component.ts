import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isAnimating: boolean = false;

  animateH1() {
    const h1Element = document.querySelector("h1");

    if (this.isAnimating || !h1Element) return;
    this.isAnimating= true;

    h1Element.classList.add("exit-left");

    setTimeout(() => {
      h1Element.classList.remove("exit-left");
      h1Element.classList.add("enter-right");

    })
  }
}
