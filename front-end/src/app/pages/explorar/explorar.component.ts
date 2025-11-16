import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { CategoriesSectionComponent } from "./components/categories-section/categories-section.component";

@Component({
  selector: 'app-apresentation',
  imports: [HeaderComponent, HeroSectionComponent, CategoriesSectionComponent],
  templateUrl: './explorar.component.html',
  styleUrl: './explorar.component.css'
})
export class ExplorarComponent {

}
