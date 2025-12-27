import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() carouselImages: string[] = [];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.carouselImages.length) %
      this.carouselImages.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
