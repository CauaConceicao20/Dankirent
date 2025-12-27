import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-object',
  imports: [HeaderComponent, CarouselComponent, CommonModule],
  templateUrl: './object.component.html',
  styleUrl: './object.component.scss'
})
export class ObjectComponent {
  public object: String = "object";
  public product! : Product;

  public constructor(private route: ActivatedRoute, private location : Location) {}

  private ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadProduct(id);
  }

  private loadProduct(id: number) {
    const data = localStorage.getItem('products');
    if (!data) return;

    const products = JSON.parse(data);
    this.product = products.find((p: Product) => p.id === id);
  }

  public back() {
    this.location.back();
  }
}
