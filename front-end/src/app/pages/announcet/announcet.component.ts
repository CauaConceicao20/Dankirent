import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ObjectService } from '../../services/objects/object.service';
import { ImageService } from '../../services/image-service/image.service';
import { Product } from '../../models/product.model';
import { ModalComponent } from '../../components/modal/modal.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-announcet',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './announcet.component.html',
  styleUrl: './announcet.component.scss'
})
export class AnnouncetComponent {

  @ViewChild('fileInput')
  public fileInput!: ElementRef;

  public announcet: String = "announcet";
  public previews: string[] = [];

  constructor(private objectService: ObjectService, private imageService: ImageService,
    private router: Router, private location : Location
  ) { }

  public form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]),

    category: new FormControl('', [Validators.required]),
    condition: new FormControl('', [Validators.required]),

    priceDay: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
    priceHour: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),

    address: new FormControl('', [Validators.required, Validators.minLength(3)]),
    city: new FormControl('', [Validators.required, Validators.minLength(2)]),
    stay: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.pattern(/^\d{5}-?\d{3}$|^$/)]),

    minDays: new FormControl(null, [Validators.pattern(/^\d+$|^$/)]),
    maxDays: new FormControl(null, [Validators.pattern(/^\d+$|^$/)]),

    localPickup: new FormControl(false),
    delivery: new FormControl(false)
  });

  public selectFiles(): void {
    this.fileInput.nativeElement.click();
  }

  public async onFileSelected(event: any) {
    const files = event.target.files;
    if (files) {
      const canAdd = 5 - this.previews.length;
      if (canAdd <= 0) {
        ModalComponent.open({
          title: 'Limite de imagens atingido',
          message: 'Você já adicionou o máximo de 5 imagens.',
          confirmText: 'Ok',
          cancelText: null
        });
        event.target.value = null;
        return;
      }
      const converted = await this.imageService.convertFiles(files, canAdd);
      this.previews.push(...converted);
    }
    event.target.value = null;
  }

  public async onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      const files = event.dataTransfer.files;
      const canAdd = 5 - this.previews.length;
      if (canAdd <= 0) {
        ModalComponent.open({
          title: 'Limite de imagens atingido',
          message: 'Você já adicionou o máximo de 5 imagens.',
          confirmText: 'Ok',
          cancelText: null
        });
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
      ModalComponent.open({
        title: "Formulário inválido",
        message: "Por favor, corrija os erros nos campos obrigatórios antes de continuar.",
        confirmText: "Ok",
        cancelText: null
      });
      return;
    }

    if (this.previews.length === 0) {
      ModalComponent.open({
        title: "Nenhuma imagem adicionada",
        message: "É necessário adicionar pelo menos uma foto do objeto para criar o anúncio.",
        confirmText: "Ok",
        cancelText: null
      });
      return;
    }

    const product: Product = {
      id: 0,
      title: this.form.value.title!,
      category: this.form.value.category!,
      state: this.form.value.condition!,
      description: this.form.value.description!,
      imageUrl: this.previews,
      address: this.form.value.address!,
      uf: this.form.value.stay!,
      price: Number(this.form.value.priceDay!),
      priceHour: Number(this.form.value.priceHour!),
      rating: 0,
      reviewsCount: 0,
      delivery: this.form.value.delivery!,
      idUser: 0
    };

    this.objectService.createProduct(product);

    ModalComponent.open({
      title: "Produto cadastrado!",
      message: "Seu anúncio foi criado com sucesso.",
      confirmText: "Ok",
      cancelText: null,
      action: () => {
        this.form.reset();
        this.previews = [];
        this.router.navigate(['/my-objects']);
      }
    });
  }

  public getErrorMessage(fieldName: string): string {
    const control = this.form.get(fieldName);
    if (!control || !control.errors || !control.touched) return '';

    if (control.errors['required']) return `${this.getFieldLabel(fieldName)} é obrigatório`;
    if (control.errors['minlength']) return `Mínimo de ${control.errors['minlength'].requiredLength} caracteres`;
    if (control.errors['maxlength']) return `Máximo de ${control.errors['maxlength'].requiredLength} caracteres`;
    if (control.errors['pattern']) {
      if (fieldName.includes('price') || fieldName.includes('Days')) return 'Digite um valor válido';
      if (fieldName === 'zipCode') return 'CEP inválido (formato: 00000-000)';
    }
    return '';
  }

  private getFieldLabel(field: string): string {
    const labels: { [key: string]: string } = {
      title: 'Título',
      description: 'Descrição',
      category: 'Categoria',
      condition: 'Condição',
      priceDay: 'Preço por dia',
      priceHour: 'Preço por hora',
      address: 'Endereço',
      city: 'Cidade',
      stay: 'Estado',
      zipCode: 'CEP',
      minDays: 'Mínimo de dias',
      maxDays: 'Máximo de dias'
    };
    return labels[field] || field;
  }

  public back() {
    this.location.back();
  }

}
