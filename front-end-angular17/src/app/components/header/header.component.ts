import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {  FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone,  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isAnimating: boolean = false;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLinkedin = faLinkedin;

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
