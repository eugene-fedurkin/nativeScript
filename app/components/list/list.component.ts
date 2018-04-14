import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CashService } from '~/services/cash-service';

import { ListModel } from '~/models/list-model';
import { ItemModel } from '~/models/item-model';

@Component({
  selector: 'list',
  moduleId: module.id,
  templateUrl: './list.component.html',
})
export class ListComponent {

  public subscription: Subscription;
  public searchValueToItems: string = '';
  private list: ListModel;
  public filtredItems: ItemModel[];

  constructor(private cash: CashService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(params => this.list = this.cash.lists.find(list => list.id === +params.listId));
    this.updateFilteredItems();
  }

  public deleteItem(id: number): void {
    const indexOfItem = this.list.items.findIndex((item) => item.id === id);

    this.list.items.splice(indexOfItem, 1);
  }

  public filterItems(title: string): void {
    this.searchValueToItems = title;
    this.updateFilteredItems();
  }

  public openForm(): void {
    this.router.navigate(['form-editor', 'create-item'])
  }

  private updateFilteredItems(): void {
    this.filtredItems = this.list.items.filter(item => !item.title.indexOf(this.searchValueToItems));
  }

}