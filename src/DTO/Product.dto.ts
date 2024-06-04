export class ProductDto {
  readonly id: number;
  readonly title: string;
  readonly desc: string;
  readonly pathImg: string;
  readonly price: number;

  constructor(
    id: number,
    title: string,
    desc: string,
    pathImg: string,
    price: number,
  ) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.pathImg = pathImg;
    this.price = price;
  }

  calculatePersentDscto(percent: number): number {
    const mountDisc = (this.price * percent) / 100;
    return this.price - mountDisc;
  }
}
