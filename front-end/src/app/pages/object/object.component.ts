import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-object',
  imports: [HeaderComponent, CarouselComponent],
  templateUrl: './object.component.html',
  styleUrl: './object.component.scss'
})
export class ObjectComponent {
  public object : String = "object";
}
