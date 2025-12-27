import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../../directives/animate-on-scroll.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-section',
  imports: [AnimateOnScrollDirective],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss'
})
export class CategoriesSectionComponent {

  public constructor(private router : Router) {}
  
  public navigateToCategory(category : string) {
    this.router.navigate(['/search'], {
      queryParams: {category}
    });
  }
}
