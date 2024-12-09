import {Repository} from '../domain/Repository';
import {Product} from '../domain/Product';

export class InMemoryRepository implements Repository {
  private products: Product[] = [];

  findAll(): Product[] {
    return [...this.products];
  }

  findById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  save(product: Product): void {
    this.products.push(product);
  }
}
