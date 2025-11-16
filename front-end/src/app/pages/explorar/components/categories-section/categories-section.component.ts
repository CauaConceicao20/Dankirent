import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-categories-section',
  imports: [AnimateOnScrollDirective],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss'
})
export class CategoriesSectionComponent {

}
