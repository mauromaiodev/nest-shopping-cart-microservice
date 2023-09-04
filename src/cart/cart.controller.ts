import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('cart')
export class CartController {
  private itemsInCart: any[] = [];

  @Get()
  getCart() {
    return this.itemsInCart;
  }

  @Post()
  addToCart(@Body() item: any) {
    this.itemsInCart.push(item);
    return 'Item adicionado ao carrinho';
  }
}
