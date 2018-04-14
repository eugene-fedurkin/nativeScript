"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cash_service_1 = require("~/services/cash-service");
var ListComponent = /** @class */ (function () {
    function ListComponent(cash, router, activatedRoute) {
        var _this = this;
        this.cash = cash;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.searchValueToItems = '';
        this.subscription = activatedRoute.params.subscribe(function (params) { return _this.list = _this.cash.lists.find(function (list) { return list.id === +params.listId; }); });
        this.updateFilteredItems();
    }
    ListComponent.prototype.deleteItem = function (id) {
        var indexOfItem = this.list.items.findIndex(function (item) { return item.id === id; });
        this.list.items.splice(indexOfItem, 1);
    };
    ListComponent.prototype.filterItems = function (title) {
        this.searchValueToItems = title;
        this.updateFilteredItems();
    };
    ListComponent.prototype.openForm = function () {
        this.router.navigate(['form-editor', 'create-item']);
    };
    ListComponent.prototype.updateFilteredItems = function () {
        var _this = this;
        this.filtredItems = this.list.items.filter(function (item) { return !item.title.indexOf(_this.searchValueToItems); });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'list',
            moduleId: module.id,
            templateUrl: './list.component.html',
        }),
        __metadata("design:paramtypes", [cash_service_1.CashService, router_1.Router, router_1.ActivatedRoute])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUQ7QUFHekQsd0RBQXNEO0FBVXREO0lBT0UsdUJBQW9CLElBQWlCLEVBQVUsTUFBYyxFQUFVLGNBQThCO1FBQXJHLGlCQUdDO1FBSG1CLFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSjlGLHVCQUFrQixHQUFXLEVBQUUsQ0FBQztRQUtyQyxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBMUIsQ0FBMEIsQ0FBQyxFQUFwRSxDQUFvRSxDQUFDLENBQUM7UUFDcEksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLGtDQUFVLEdBQWpCLFVBQWtCLEVBQVU7UUFDMUIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sbUNBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxnQ0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQTtJQUN0RCxDQUFDO0lBRU8sMkNBQW1CLEdBQTNCO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBN0JVLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3JDLENBQUM7eUNBUTBCLDBCQUFXLEVBQWtCLGVBQU0sRUFBMEIsdUJBQWM7T0FQMUYsYUFBYSxDQStCekI7SUFBRCxvQkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcblxyXG5pbXBvcnQgeyBDYXNoU2VydmljZSB9IGZyb20gJ34vc2VydmljZXMvY2FzaC1zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IExpc3RNb2RlbCB9IGZyb20gJ34vbW9kZWxzL2xpc3QtbW9kZWwnO1xyXG5pbXBvcnQgeyBJdGVtTW9kZWwgfSBmcm9tICd+L21vZGVscy9pdGVtLW1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGlzdCcsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcclxuXHJcbiAgcHVibGljIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHB1YmxpYyBzZWFyY2hWYWx1ZVRvSXRlbXM6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgbGlzdDogTGlzdE1vZGVsO1xyXG4gIHB1YmxpYyBmaWx0cmVkSXRlbXM6IEl0ZW1Nb2RlbFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhc2g6IENhc2hTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLmxpc3QgPSB0aGlzLmNhc2gubGlzdHMuZmluZChsaXN0ID0+IGxpc3QuaWQgPT09ICtwYXJhbXMubGlzdElkKSk7XHJcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcmVkSXRlbXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWxldGVJdGVtKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4T2ZJdGVtID0gdGhpcy5saXN0Lml0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xyXG5cclxuICAgIHRoaXMubGlzdC5pdGVtcy5zcGxpY2UoaW5kZXhPZkl0ZW0sIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbHRlckl0ZW1zKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VhcmNoVmFsdWVUb0l0ZW1zID0gdGl0bGU7XHJcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcmVkSXRlbXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuRm9ybSgpOiB2b2lkIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZm9ybS1lZGl0b3InLCAnY3JlYXRlLWl0ZW0nXSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlRmlsdGVyZWRJdGVtcygpOiB2b2lkIHtcclxuICAgIHRoaXMuZmlsdHJlZEl0ZW1zID0gdGhpcy5saXN0Lml0ZW1zLmZpbHRlcihpdGVtID0+ICFpdGVtLnRpdGxlLmluZGV4T2YodGhpcy5zZWFyY2hWYWx1ZVRvSXRlbXMpKTtcclxuICB9XHJcblxyXG59Il19