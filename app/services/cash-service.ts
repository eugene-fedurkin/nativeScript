import { Injectable } from '@angular/core';
import { ListModel } from '~/models/list-model';
import { ItemModel } from '~/models/item-model';

@Injectable()
export class CashService {

  public searchValueToLists: string = '';
  public filteredLists: ListModel[] = [];
  public lists: ListModel[] = [];
  public isOnline: boolean = false;
  public listId: number = 0;

  constructor() { // TODO: delete
    this.gen()
    this.updateFiltredList()
  }

  private gen() {
    for (let i = 0; i < 7; i++) {
      const list = new ListModel();
      list.title = 'title' + i;
      list.id = i;
      list.items = [];
      for (let z = i + 10; z < 30; z++) {
        const item = new ItemModel();
        item.title = 'title' + z;
        item.listId = list.id;
        item.description = '' + Math.random();
        item.id = z;
        list.items.push(item);
      }

      this.lists.push(list)
    }
  }

  public updateFiltredList(): void {
    this.filteredLists = this.lists.filter(list => !list.title.indexOf(this.searchValueToLists));
  }
}