export interface Product {
      id: number,
      title: string,
      category: string,
      state: string,
      imageUrl: string[],
      description: string,
      address: string,
      uf: string,
      price: number,
      priceHour: number,
      rating: number,
      reviewsCount: number,
      delivery: boolean
}