import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";

import { CashService } from "~/services/cash-service";
import { ListService } from "~/services/list-service";

import { ListsComponent } from "~/components/lists/lists.component";
import { ItemsComponent } from "~/components/item/items.component";
import { ItemDetailComponent } from "~/components/item/item-detail.component";
import { FormEditor } from "~/components/form-editor/form-editor.component";
import { ItemService } from "~/components/item/item.service";
import { ListComponent } from "~/components/list/list.component";
import { ItemComponent } from "~/item/item.component";



// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        ListsComponent,
        ItemsComponent,
        ItemDetailComponent,
        FormEditor,
        ListComponent,
        ItemComponent,
    ],
    providers: [
        ItemService,
        CashService,
        ListService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
