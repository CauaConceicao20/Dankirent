import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { CategoriesSectionComponent } from "./components/categories-section/categories-section.component";
import { FeaturedItemsSectionComponent } from './components/featured-items-section/featured-items-section.component';
import { BenefitsSectionComponent } from './components/benefits-section/benefits-section.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-apresentation',
  imports: [HeaderComponent, HeroSectionComponent, CategoriesSectionComponent, FeaturedItemsSectionComponent,
      BenefitsSectionComponent, FooterComponent  ],
  templateUrl: './explorar.component.html',
  styleUrl: './explorar.component.scss'
})
export class ExplorarComponent {

}
