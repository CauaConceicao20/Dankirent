import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardItemComponent } from '../../components/card-item/card-item.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router  } from '@angular/router';
import { ObjectService } from '../../services/objects/object.service';
import { Product } from '../../models/product.model';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  imports: [CommonModule, HeaderComponent, CardItemComponent, FormsModule,
    ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  public form: FormGroup;
  public products: Product[] = [];
  public search: string = "search";

  constructor(private fb: FormBuilder, private objectService: ObjectService, private router: Router,
    private route: ActivatedRoute) {
    this.form = this.fb.group({
      title: [''],
      category: [''],
      city: [''],
      stateObject: [''],
      priceMax: ['']
    });
  }

  public ngOnInit(): void {
    this.products = this.objectService.getProducts();

    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.form.get('category')?.setValue(category);
        this.searchProducts();
      }
    });

    this.form.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(_ => {
        this.searchProducts();
      });
  }

  public searchProducts(): void {
    const { title, category, city, priceMax, stateObject } = this.form.value;

    this.products = this.objectService.searchProducts(
      title ?? "",
      category ?? "",
      city ?? "",
      Number(priceMax) || 0,
      stateObject ?? ""
    );
  }

  public clearFilters(): void {
    this.form.patchValue({
      title: '',
      category: '',
      city: '',
      stateObject: '',
      priceMax: ''
    });
    this.products = this.objectService.getProducts();
  }
}