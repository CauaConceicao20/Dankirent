import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ObjectService } from '../../services/objects/object.service';
import { ImageService } from '../../services/image-service/image.service';
import { Product } from '../../models/product.model';
import { ModalComponent } from '../../components/modal/modal.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-object',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './update-object.component.html',
  styleUrl: './update-object.component.scss'
})
export class UpdateObjectComponent implements OnInit {

  @ViewChild('fileInput')
  public fileInput!: ElementRef;
  
  public announcet : String = "announcet"
  public previews: string[] = [];
  private originalProduct: Product | null = null;
  private productId: number | null = null;

  public form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),

    category: new FormControl('', [Validators.required]),
    condition: new FormControl('', [Validators.required]),

    priceDay: new FormControl(0, [Validators.required]),
    priceHour: new FormControl(0, [Validators.required]),

    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    stay: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', []),

    minDays: new FormControl(null),
    maxDays: new FormControl(null),

    localPickup: new FormControl(false),
    delivery: new FormControl(false)
  });

  constructor(private objectService: ObjectService, private imageService: ImageService,
    private router: Router, private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id')) || null;
    if (!this.productId) {
      alert('ID do produto inválido');
      this.router.navigate(['/my-objects']);
      return;
    }

    const product = this.objectService.getProducts().find(p => p.id === this.productId);
    if (!product) {
      alert('Produto não encontrado');
      this.router.navigate(['/my-objects']);
      return;
    }

    this.originalProduct = product;
    this.form.patchValue({
      title: product.title,
      description: product.description,
      category: product.category,
      condition: product.state,
      priceDay: Number(product.price),
      priceHour: Number(product.priceHour),
      address: product.address,
      city: product.address,
      stay: product.uf,
      delivery: product.delivery
    });

    this.previews = Array.isArray(product.imageUrl) ? [...product.imageUrl] : [];
  }

  public selectFiles(): void {
    this.fileInput.nativeElement.click();
  }

  public async onFileSelected(event: any) {
    const files: FileList = event.target.files;
    if (!files) return;

    const canAdd = 5 - this.previews.length;
    if (canAdd <= 0) {
      alert('Limite de 5 imagens atingido');
      event.target.value = null;
      return;
    }

    const converted = await this.imageService.convertFiles(files, canAdd);
    this.previews.push(...converted);
    event.target.value = null;
  }

  public async onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      const files = event.dataTransfer.files;
      const canAdd = 5 - this.previews.length;
      if (canAdd <= 0) {
        alert('Limite de 5 imagens atingido');
        return;
      }
      const converted = await this.imageService.convertFiles(files, canAdd);
      this.previews.push(...converted);
    }
  }

  public onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  public removeImage(index: number): void {
    this.previews.splice(index, 1);
  }

  public submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.previews.length === 0) {
      alert('É necessário ao menos uma foto');
      return;
    }

    if (!this.originalProduct) {
      alert('Produto original não carregado');
      return;
    }

    const updated: Product = {
      id: this.originalProduct.id,
      title: this.form.value.title!,
      category: this.form.value.category!,
      state: this.form.value.condition!,
      description: this.form.value.description!,
      imageUrl: this.previews,
      address: this.form.value.address!,
      uf: this.form.value.stay!,
      price: Number(this.form.value.priceDay!),
      priceHour: Number(this.form.value.priceHour!),
      rating: this.originalProduct.rating,
      reviewsCount: this.originalProduct.reviewsCount,
      delivery: this.form.value.delivery!,
      idUser: this.originalProduct.idUser
    };

    try {
      this.objectService.updateProduct(updated);

      ModalComponent.open({
        title: 'Produto atualizado!',
        message: 'As alterações foram salvas com sucesso.',
        confirmText: 'Ok',
        cancelText: null,
        action: () => {
          ModalComponent.close();
          this.router.navigate(['/my-objects']);
        }
      });

    } catch (error) {
      alert('Erro ao atualizar produto: ' + error);
    }
  }

}
