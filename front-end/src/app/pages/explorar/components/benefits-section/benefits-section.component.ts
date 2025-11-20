import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../../directives/animate-on-scroll.directive';


@Component({
  selector: 'app-benefits-section',
  imports: [AnimateOnScrollDirective],
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.scss'
})
export class BenefitsSectionComponent {

}
