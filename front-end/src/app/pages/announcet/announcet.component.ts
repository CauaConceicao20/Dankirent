import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ObjectService } from '../../services/objects/object.service';
import { ImageService } from '../../services/image-service/image.service';
import { Product } from '../../models/product.model';

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

  constructor(private objectService: ObjectService, private imageService: ImageService) { }

  public form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),

    category: new FormControl('', [Validators.required]),
    condition: new FormControl('', [Validators.required]),

    priceDay: new FormControl('', [Validators.required]),
    priceHour: new FormControl('', [Validators.required]),

    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    stay: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', []),

    minDays: new FormControl(null),
    maxDays: new FormControl(null),

    localPickup: new FormControl(false),
    delivery: new FormControl(false)
  });

  public selectFiles() : void {
    this.fileInput.nativeElement.click();
  }

  public async onFileSelected(event: any) {
    const files = event.target.files;
    if (files) {
      const converted = await this.imageService.convertFiles(files, 5 - this.previews.length);
      this.previews.push(...converted);
    }
    event.target.value = null;
  }

  public async onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      const files = event.dataTransfer.files;
      const converted = await this.imageService.convertFiles(files, 5 - this.previews.length);
      this.previews.push(...converted);
    }
  }

  public onDragOver(event: DragEvent) : void {
    event.preventDefault();
  }

  public removeImage(index: number) : void {
    this.previews.splice(index, 1);
  }

  public submit() : void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
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
      idUser : 0
    };

    this.objectService.createProduct(product);

    this.form.reset();
    this.previews = []; 

    console.log("Produto cadastrado com sucesso!");
  }
}
