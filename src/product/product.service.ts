import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private readonly productRepo: Repository<Product>) { }

    async all(): Promise<Product[]> {
        return this.productRepo.find();
    }

    async create(product: Product): Promise<Product> {
        return this.productRepo.save(product)
    }

    async find(id: number): Promise<Product> {
        return this.productRepo.findOne({ id })
    }

    async edit(id: number, data): Promise<any> {
        return this.productRepo.update(id, data)
    }

    async delete(id: number): Promise<any> {
        return this.productRepo.delete(id);
    }
}
