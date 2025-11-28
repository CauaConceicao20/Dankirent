import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  carouselImages: string[] = [
    "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg",
    "https://images.pexels.com/photos/1654698/pexels-photo-1654698.jpeg"
  ];

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
