import {Product} from './Product';

export interface Repository {
  findAll(): Product[];
  findById(id: string): Product | undefined;
  save(product: Product): void;
}
