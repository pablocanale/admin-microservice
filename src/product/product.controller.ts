import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {

    constructor(private productService: ProductService) { }

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
