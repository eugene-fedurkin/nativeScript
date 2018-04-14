import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { ListsComponent } from '~/components/lists/lists.component';
import { FormEditor } from '~/components/form-editor/form-editor.component';
import { ListComponent } from '~/components/list/list.component';
import { ItemComponent } from '~/item/item.component';

// import { ListsComponent } from '~/lists/lists.component';
// import { FormEditor } from '~/form-editor/form-editor.component';
// import { ItemsComponent } from './item/items.component';
// import { ItemDetailComponent } from './item/item-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/lists', pathMatch: 'full' },
    { path: 'lists', component: ListsComponent },
    { path: 'form-editor/:action', component: FormEditor },
    { path: 'list/:listId', component: ListComponent, children: [
        { path: 'item/:itemId', component: ItemComponent },
    ] },
    { path: 'list/:listId', component: ListComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}