export class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public price: number,
    public description?: string
  ) { }
}
