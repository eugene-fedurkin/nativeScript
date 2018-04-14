"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import * as firebase from 'nativescript-plugin-firebase';
var connectivity = require("tns-core-modules/connectivity");
var cash_service_1 = require("~/services/cash-service");
var AppComponent = /** @class */ (function () {
    function AppComponent(cash) {
        this.cash = cash;
    }
    AppComponent.prototype.subscribeToNetworkConnection = function () {
        var _this = this;
        connectivity.startMonitoring(function (newConnectionType) {
            if (newConnectionType === connectivity.connectionType.none) {
                _this.cash.isOnline = false;
            }
            else {
                _this.cash.isOnline = true;
            }
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.subscribeToNetworkConnection();
        // firebase.init().then(() => {
        //     firebase.setValue(
        //         'companies',
        //         'bar12')
        // }).then(() => {
        //     const list = {
        //         title: 'LIST 1',
        //         id: 1,
        //         items: [
        //             {title: 'item 1', id: 0}
        //         ]
        //     }
        //     firebase.setValue('123', list)
        // })
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [cash_service_1.CashService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNERBQTREO0FBQzVELDREQUE4RDtBQUM5RCx3REFBc0Q7QUFNdEQ7SUFFRSxzQkFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUFHLENBQUM7SUFFL0IsbURBQTRCLEdBQXBDO1FBQUEsaUJBUUM7UUFQQyxZQUFZLENBQUMsZUFBZSxDQUFDLFVBQUEsaUJBQWlCO1lBQzVDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixLQUFLLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzdCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDNUIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUNsQywrQkFBK0I7UUFDL0IseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQix1Q0FBdUM7UUFDdkMsWUFBWTtRQUNaLFFBQVE7UUFDUixxQ0FBcUM7UUFDckMsS0FBSztJQUNULENBQUM7SUE5QlEsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQUcwQiwwQkFBVztPQUYxQixZQUFZLENBK0J4QjtJQUFELG1CQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vLyBpbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJztcbmltcG9ydCAqIGFzIGNvbm5lY3Rpdml0eSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb25uZWN0aXZpdHlcIjtcbmltcG9ydCB7IENhc2hTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvY2FzaC1zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FzaDogQ2FzaFNlcnZpY2UpIHt9XG5cbiAgICBwcml2YXRlIHN1YnNjcmliZVRvTmV0d29ya0Nvbm5lY3Rpb24oKTogdm9pZCB7XG4gICAgICBjb25uZWN0aXZpdHkuc3RhcnRNb25pdG9yaW5nKG5ld0Nvbm5lY3Rpb25UeXBlID0+IHtcbiAgICAgICAgaWYgKG5ld0Nvbm5lY3Rpb25UeXBlID09PSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubm9uZSkge1xuICAgICAgICAgIHRoaXMuY2FzaC5pc09ubGluZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FzaC5pc09ubGluZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5zdWJzY3JpYmVUb05ldHdvcmtDb25uZWN0aW9uKCk7XG4gICAgICAgIC8vIGZpcmViYXNlLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gICAgIGZpcmViYXNlLnNldFZhbHVlKFxuICAgICAgICAvLyAgICAgICAgICdjb21wYW5pZXMnLFxuICAgICAgICAvLyAgICAgICAgICdiYXIxMicpXG4gICAgICAgIC8vIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3QgbGlzdCA9IHtcbiAgICAgICAgLy8gICAgICAgICB0aXRsZTogJ0xJU1QgMScsXG4gICAgICAgIC8vICAgICAgICAgaWQ6IDEsXG4gICAgICAgIC8vICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgLy8gICAgICAgICAgICAge3RpdGxlOiAnaXRlbSAxJywgaWQ6IDB9XG4gICAgICAgIC8vICAgICAgICAgXVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgZmlyZWJhc2Uuc2V0VmFsdWUoJzEyMycsIGxpc3QpXG4gICAgICAgIC8vIH0pXG4gICAgfVxufVxuIl19