import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ObjectService } from '../../services/objects/object.service';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-card-item',
  imports: [RouterLink, CommonModule, FormsModule],
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
  @Input() isUpdate: boolean = false;
  @Output() onDelete = new EventEmitter<number>();

  public constructor(private router: Router, private objectService: ObjectService) { }

  public viewProduct(id: number): void {
    this.router.navigate(['/object', id]);
  }

  public deleteObject(id: number): void {
    ModalComponent.open({
      title: "Confirmar Exclusão",
      message: `Tem certeza que deseja excluir ${this.title}? está ação não pode ser desfeita` ,
      confirmText: "Excluir",
      cancelText: "Cancelar",
      action: () => {
        ModalComponent.close();
        this.objectService.deleteObject(id);
        this.onDelete.emit(id);
      }
    });
  }
}
