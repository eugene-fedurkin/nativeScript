"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cash_service_1 = require("~/services/cash-service");
var list_model_1 = require("~/models/list-model");
var ListService = /** @class */ (function () {
    function ListService(cash) {
        this.cash = cash;
    }
    ListService.prototype.createList = function (title) {
        var list = new list_model_1.ListModel();
        list.title = title;
        list.id = this.cash.listId++;
        this.cash.lists.push(list);
        this.cash.updateFiltredList();
    };
    ListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [cash_service_1.CashService])
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHdEQUFzRDtBQUN0RCxrREFBZ0Q7QUFHaEQ7SUFFRSxxQkFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUFHLENBQUM7SUFFbEMsZ0NBQVUsR0FBakIsVUFBa0IsS0FBYTtRQUM3QixJQUFNLElBQUksR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBWFUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdlLDBCQUFXO09BRjFCLFdBQVcsQ0FZdkI7SUFBRCxrQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYXNoU2VydmljZSB9IGZyb20gJ34vc2VydmljZXMvY2FzaC1zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGlzdE1vZGVsIH0gZnJvbSAnfi9tb2RlbHMvbGlzdC1tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMaXN0U2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FzaDogQ2FzaFNlcnZpY2UpIHt9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVMaXN0KHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGxpc3QgPSBuZXcgTGlzdE1vZGVsKCk7XHJcbiAgICBsaXN0LnRpdGxlID0gdGl0bGU7XHJcbiAgICBsaXN0LmlkID0gdGhpcy5jYXNoLmxpc3RJZCsrO1xyXG5cclxuICAgIHRoaXMuY2FzaC5saXN0cy5wdXNoKGxpc3QpO1xyXG4gICAgdGhpcy5jYXNoLnVwZGF0ZUZpbHRyZWRMaXN0KCk7XHJcbiAgfVxyXG59Il19