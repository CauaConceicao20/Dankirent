import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() category!: string;
  @Input() state!: string;
  @Input() imageUrl!: string;
  @Input() description!: string;
  @Input() address!: string;
  @Input() uf!: string;
  @Input() price!: number;
  @Input() priceHour!: number;
  @Input() rating!: number;
  @Input() reviewsCount!: number;
  @Input() delivery!: boolean;
}
