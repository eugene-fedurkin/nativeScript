"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var lists_component_1 = require("~/components/lists/lists.component");
var form_editor_component_1 = require("~/components/form-editor/form-editor.component");
var list_component_1 = require("~/components/list/list.component");
var item_component_1 = require("~/item/item.component");
// import { ListsComponent } from '~/lists/lists.component';
// import { FormEditor } from '~/form-editor/form-editor.component';
// import { ItemsComponent } from './item/items.component';
// import { ItemDetailComponent } from './item/item-detail.component';
var routes = [
    { path: '', redirectTo: '/lists', pathMatch: 'full' },
    { path: 'lists', component: lists_component_1.ListsComponent },
    { path: 'form-editor/:action', component: form_editor_component_1.FormEditor },
    { path: 'list/:listId', component: list_component_1.ListComponent, children: [
            { path: 'item/:itemId', component: item_component_1.ItemComponent },
        ] },
    { path: 'list/:listId', component: list_component_1.ListComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsc0VBQW9FO0FBQ3BFLHdGQUE0RTtBQUM1RSxtRUFBaUU7QUFDakUsd0RBQXNEO0FBRXRELDREQUE0RDtBQUM1RCxvRUFBb0U7QUFDcEUsMkRBQTJEO0FBQzNELHNFQUFzRTtBQUV0RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsa0NBQVUsRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsUUFBUSxFQUFFO1lBQ3hELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtTQUNyRCxFQUFFO0lBQ0gsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0NBQ3JELENBQUM7QUFNRjtJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUc7SUFBRCx1QkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTGlzdHNDb21wb25lbnQgfSBmcm9tICd+L2NvbXBvbmVudHMvbGlzdHMvbGlzdHMuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1FZGl0b3IgfSBmcm9tICd+L2NvbXBvbmVudHMvZm9ybS1lZGl0b3IvZm9ybS1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICd+L2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSAnfi9pdGVtL2l0ZW0uY29tcG9uZW50JztcblxuLy8gaW1wb3J0IHsgTGlzdHNDb21wb25lbnQgfSBmcm9tICd+L2xpc3RzL2xpc3RzLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBGb3JtRWRpdG9yIH0gZnJvbSAnfi9mb3JtLWVkaXRvci9mb3JtLWVkaXRvci5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0vaXRlbXMuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9saXN0cycsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgeyBwYXRoOiAnbGlzdHMnLCBjb21wb25lbnQ6IExpc3RzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnZm9ybS1lZGl0b3IvOmFjdGlvbicsIGNvbXBvbmVudDogRm9ybUVkaXRvciB9LFxuICAgIHsgcGF0aDogJ2xpc3QvOmxpc3RJZCcsIGNvbXBvbmVudDogTGlzdENvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgeyBwYXRoOiAnaXRlbS86aXRlbUlkJywgY29tcG9uZW50OiBJdGVtQ29tcG9uZW50IH0sXG4gICAgXSB9LFxuICAgIHsgcGF0aDogJ2xpc3QvOmxpc3RJZCcsIGNvbXBvbmVudDogTGlzdENvbXBvbmVudCB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7fSJdfQ==