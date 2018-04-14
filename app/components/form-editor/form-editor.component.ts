import { Component, OnInit, OnDestroy } from '@angular/core';

import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

import { ListService } from '../../services/list-service';

@Component({
  selector: 'form-editor',
  moduleId: module.id,
  templateUrl: './form-editor.component.html',
})
export class FormEditor implements OnInit, OnDestroy {

  public title: string = '';
  public subscription: Subscription;
  private action: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private listService: ListService,
  ) {
    this.subscription = activatedRoute.params.subscribe(params => this.action = params.action);
  }

  public createList(): void {
    this.listService.createList(this.title);
    this.closeForm();
  }

  public closeForm(): void {
    this.location.back();
  }

  ngOnInit() {
    // if (this.action === 'create-list') {
    //   debugger
    // } else if (this.action === 'create-item') {

    // }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}