import {Product} from '../model/Product';

export class ProductCatalogVM {
  private products: Product[] = [];

  getProducts(): Product[] {
    return [...this.products];
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }
}
