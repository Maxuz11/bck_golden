import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/DTO/Product.dto';

@Injectable()
export class ProductService {
  getProducts(): ProductDto[] {
    const a = new ProductDto(1, 'hola', 'aaa', '/aa/aa', 9990);
    return [a];
  }
}
