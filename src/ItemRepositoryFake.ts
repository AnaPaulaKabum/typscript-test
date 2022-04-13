import { IItemRepository } from './IItemRepository';

export class ItemRepositoryFake implements IItemRepository {
  protected itens: String[];

  constructor() {
    this.itens = [];
    this.itens.push('Tinta');
  }

  getItens() {
    return this.itens;
  }
}
