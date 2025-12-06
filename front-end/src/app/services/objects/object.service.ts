import { Injectable } from '@angular/core';
import { Product } from '../../models/product.mode';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  public products: Product[] = []

  public constructor(private storageService: StorageService) { }

  inicializarProdutos() {
    const initialProducts: Product[] = [
      {
        id: 1,
        title: "Prancha de Stand Up Paddle",
        category: "Esportes",
        state: "Novo",
        imageUrl: ["https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg",  "https://images.pexels.com/photos/1654698/pexels-photo-1654698.jpeg"],
        description: "Prancha inflável de SUP com bomba, remo e kit de reparo. Ideal para lagos, rios e mar calmo. Fácil transporte",
        address: "Rio de Janeiro",
        uf: "RJ",
        price: 60.00,
        priceHour: 10.00,
        rating: 4.9,
        reviewsCount: 15,
        delivery: true
      },
      {
        id: 2,
        title: "Violão Yamaha Clássico",
        category: "Instrumentos",
        state: "Semi-novo",
        imageUrl: ["https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg"],
        description: "Violão clássico Yamaha C40 em excelente estado. Cordas novas e afinado. Ideal para iniciantes e estudantes de",
        address: "São Paulo",
        uf: "SP",
        price: 30.00,
        priceHour: 6.00,
        rating: 5.0,
        reviewsCount: 5,
        delivery: false
      },
      {
        id: 3,
        title: "Barraca de Camping 4 Pessoas",
        category: "Camping",
        state: "Usado",
        imageUrl: ["https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg"],
        description: "Barraca Coleman para 4 pessoas, impermeável e com avancê. Perfeita para acampamentos e festivais. Inclui kit",
        address: "São Paulo",
        uf: "SP",
        price: 40.00,
        priceHour: 8.00,
        rating: 4.5,
        reviewsCount: 8,
        delivery: true
      },

      {
        id: 4,
        title: "Furadeira de Impacto Profissional",
        category: "Ferrmamentas",
        state: "Seminovo",
        imageUrl: ["https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg"],
        description: "Furadeira de impacto Bosch com maleta e kit de brocas. Ideal para trabalhos em concreto, madeira e metal.",
        address: "São Paulo",
        uf: "SP",
        price: 25.00,
        priceHour: 5.00,
        rating: 4.8,
        reviewsCount: 12,
        delivery: true
      }
    ];
    localStorage.setItem('products', JSON.stringify(initialProducts));
    this.products = initialProducts;
  }
}
