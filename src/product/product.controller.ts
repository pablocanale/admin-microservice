import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {

    constructor(private productService: ProductService,
        @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy
    ) { }

    @Get()
    async all() {
        return this.productService.all()
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.productService.find(id);
    }

    @Post()
    async create(
        @Body('title') title: string,
        @Body('image') image: string,
    ) {
        return this.productService.create(
            {
                title,
                image,
            })
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body('title') title: string,
        @Body('image') image: string,
    ) {
        return this.productService.edit(
            id,
            {
                title,
                image
            })
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.productService.delete(id);
    }
}
