import { IItemRepository } from './IItemRepository';

export class ItemService {
  constructor(private repository: IItemRepository) {}

  getItems(): any {
    return this.repository.getItens();
  }
}
