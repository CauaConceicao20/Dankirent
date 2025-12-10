import { Component, OnInit } from '@angular/core';
import { CardItemComponent } from '../../../../components/card-item/card-item.component';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../../directives/animate-on-scroll.directive';
import { Router } from '@angular/router';
import { Product } from '../../../../models/product.model';
import { ObjectService } from '../../../../services/objects/object.service';



@Component({
  selector: 'app-featured-items-section',
  imports: [CardItemComponent, CommonModule, AnimateOnScrollDirective],
  templateUrl: './featured-items-section.component.html',
  styleUrl: './featured-items-section.component.scss'
})
export class FeaturedItemsSectionComponent implements OnInit {

    public constructor(private router: Router, private objectService : ObjectService) {}

    public cards: Product[] = [];

   public ngOnInit(): void {
        this.cards = this.objectService.getProducts() || [];
    }
}
