import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { CardItemComponent } from "../../components/card-item/card-item.component";
import { Product } from '../../models/product.model';
import { ObjectService } from '../../services/objects/object.service';

@Component({
  selector: 'app-my-objects',
  imports: [CommonModule, HeaderComponent, CardItemComponent],
  templateUrl: './my-objects.component.html',
  styleUrl: './my-objects.component.scss'
})
export class MyObjectsComponent {
  
  public myObjects: String = "my-objects";

   public products : Product[];
  
  constructor(private objectService : ObjectService) {
    this.products = objectService.getProductsOfUser();
  }
}
