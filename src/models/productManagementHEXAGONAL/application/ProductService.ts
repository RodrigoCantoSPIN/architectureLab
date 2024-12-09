import {Product} from '../domain/Product';
import {Repository} from '../domain/Repository';

export class ProductService {
  constructor(private repository: Repository) {}

  getAllProducts(): Product[] {
    return this.repository.findAll();
  }

  addProduct(product: Product): void {
    this.repository.save(product);
  }
}
