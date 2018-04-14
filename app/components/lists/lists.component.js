"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cash_service_1 = require("~/services/cash-service");
var ListsComponent = /** @class */ (function () {
    function ListsComponent(cash, router, ActivatedRoute) {
        this.cash = cash;
        this.router = router;
        this.ActivatedRoute = ActivatedRoute;
        this.title = '';
    }
    Object.defineProperty(ListsComponent.prototype, "lists", {
        get: function () {
            return this.cash.filteredLists;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ListsComponent.prototype.filterLists = function (title) {
        this.cash.searchValueToLists = title;
        this.cash.filteredLists = this.cash.lists.filter(function (list) { return !list.title.indexOf(title); });
    };
    ListsComponent.prototype.openForm = function () {
        this.router.navigate(['form-editor', 'create-list']);
    };
    ListsComponent.prototype.delete = function (id) {
        var indexOfList = this.cash.lists.findIndex(function (list) { return list.id === id; });
        this.cash.lists.splice(indexOfList, 1);
        this.cash.updateFiltredList();
    };
    ListsComponent.prototype.openItems = function (list) {
        this.router.navigate(['list', list.id]);
    };
    ListsComponent = __decorate([
        core_1.Component({
            selector: "ns-lists",
            moduleId: module.id,
            templateUrl: "./lists.component.html",
        }),
        __metadata("design:paramtypes", [cash_service_1.CashService, router_1.Router, router_1.ActivatedRoute])
    ], ListsComponent);
    return ListsComponent;
}());
exports.ListsComponent = ListsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5RDtBQUl6RCx3REFBc0Q7QUFPdEQ7SUFNRSx3QkFBb0IsSUFBaUIsRUFBVSxNQUFjLEVBQVUsY0FBOEI7UUFBakYsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMOUYsVUFBSyxHQUFXLEVBQUUsQ0FBQztJQUsrRSxDQUFDO0lBSjFHLHNCQUFXLGlDQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUlLLG9DQUFXLEdBQWxCLFVBQW1CLEtBQWE7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFTSxpQ0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sK0JBQU0sR0FBYixVQUFjLEVBQVU7UUFDdEIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLGtDQUFTLEdBQWhCLFVBQWlCLElBQWU7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQXpCVSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQU8wQiwwQkFBVyxFQUFrQixlQUFNLEVBQTBCLHVCQUFjO09BTjFGLGNBQWMsQ0EwQjFCO0lBQUQscUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IExpc3RNb2RlbCB9IGZyb20gJ34vbW9kZWxzL2xpc3QtbW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgQ2FzaFNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2VzL2Nhc2gtc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWxpc3RzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9saXN0cy5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdHNDb21wb25lbnQge1xyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGdldCBsaXN0cygpOiBMaXN0TW9kZWxbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXNoLmZpbHRlcmVkTGlzdHM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXNoOiBDYXNoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBBY3RpdmF0ZWRSb3V0ZSA6QWN0aXZhdGVkUm91dGUgKSB7fVxyXG5cclxuICBwdWJsaWMgZmlsdGVyTGlzdHModGl0bGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5jYXNoLnNlYXJjaFZhbHVlVG9MaXN0cyA9IHRpdGxlO1xyXG4gICAgdGhpcy5jYXNoLmZpbHRlcmVkTGlzdHMgPSB0aGlzLmNhc2gubGlzdHMuZmlsdGVyKGxpc3QgPT4gIWxpc3QudGl0bGUuaW5kZXhPZih0aXRsZSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW5Gb3JtKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydmb3JtLWVkaXRvcicsICdjcmVhdGUtbGlzdCddKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWxldGUoaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXhPZkxpc3QgPSB0aGlzLmNhc2gubGlzdHMuZmluZEluZGV4KGxpc3QgPT4gbGlzdC5pZCA9PT0gaWQpO1xyXG4gICAgdGhpcy5jYXNoLmxpc3RzLnNwbGljZShpbmRleE9mTGlzdCwgMSk7XHJcbiAgICB0aGlzLmNhc2gudXBkYXRlRmlsdHJlZExpc3QoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuSXRlbXMobGlzdDogTGlzdE1vZGVsKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xpc3QnLCBsaXN0LmlkXSk7XHJcbiAgfVxyXG59Il19