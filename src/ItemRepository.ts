import { IItemRepository } from './IItemRepository';

export class ItemRepository implements IItemRepository {
  protected itens: String[];

  constructor() {
    this.itens = [];
    this.itens.push('cola');
    this.itens.push('lapis');
    this.itens.push('caneta');
  }

  getItens() {
    return this.itens;
  }
}
