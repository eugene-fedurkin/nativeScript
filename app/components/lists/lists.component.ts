import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ListModel } from '~/models/list-model';

import { CashService } from '~/services/cash-service';

@Component({
    selector: "ns-lists",
    moduleId: module.id,
    templateUrl: "./lists.component.html",
})
export class ListsComponent {
  public title: string = '';
  public get lists(): ListModel[] {
    return this.cash.filteredLists;
  };

  constructor(private cash: CashService, private router: Router, private ActivatedRoute :ActivatedRoute ) {}

  public filterLists(title: string): void {
    this.cash.searchValueToLists = title;
    this.cash.filteredLists = this.cash.lists.filter(list => !list.title.indexOf(title));
  }

  public openForm(): void {
    this.router.navigate(['form-editor', 'create-list']);
  }

  public delete(id: number): void {
    const indexOfList = this.cash.lists.findIndex(list => list.id === id);
    this.cash.lists.splice(indexOfList, 1);
    this.cash.updateFiltredList();
  }

  public openItems(list: ListModel): void {
    this.router.navigate(['list', list.id]);
  }
}