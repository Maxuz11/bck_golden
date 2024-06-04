import { Controller, Get } from '@nestjs/common';
import { ProductDto } from 'src/DTO/Product.dto';
import { ProductService } from 'src/Services/Product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productsv: ProductService) {}

  @Get('/all')
  getProd(): ProductDto[] {
    return this.productsv.getProducts();
  }
}
