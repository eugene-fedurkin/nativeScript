import { Injectable } from '@angular/core';
import { CashService } from '~/services/cash-service';
import { ListModel } from '~/models/list-model';

@Injectable()
export class ListService {

  constructor(private cash: CashService) {}

  public createList(title: string): void {
    const list = new ListModel();
    list.title = title;
    list.id = this.cash.listId++;

    this.cash.lists.push(list);
    this.cash.updateFiltredList();
  }
}