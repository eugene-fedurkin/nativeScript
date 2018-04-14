"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var list_service_1 = require("../../services/list-service");
var FormEditor = /** @class */ (function () {
    function FormEditor(router, activatedRoute, location, listService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.listService = listService;
        this.title = '';
        this.subscription = activatedRoute.params.subscribe(function (params) { return _this.action = params.action; });
    }
    FormEditor.prototype.createList = function () {
        this.listService.createList(this.title);
        this.closeForm();
    };
    FormEditor.prototype.closeForm = function () {
        this.location.back();
    };
    FormEditor.prototype.ngOnInit = function () {
        // if (this.action === 'create-list') {
        //   debugger
        // } else if (this.action === 'create-item') {
        // }
    };
    FormEditor.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    FormEditor = __decorate([
        core_1.Component({
            selector: 'form-editor',
            moduleId: module.id,
            templateUrl: './form-editor.component.html',
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            common_1.Location,
            list_service_1.ListService])
    ], FormEditor);
    return FormEditor;
}());
exports.FormEditor = FormEditor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9ybS1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELDBDQUEyQztBQUUzQywwQ0FBeUQ7QUFFekQsNERBQTBEO0FBTzFEO0lBTUUsb0JBQ1UsTUFBYyxFQUNkLGNBQThCLEVBQzlCLFFBQWtCLEVBQ2xCLFdBQXdCO1FBSmxDLGlCQU9DO1FBTlMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUjNCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFVeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFTSwrQkFBVSxHQUFqQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLDhCQUFTLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsNkJBQVEsR0FBUjtRQUNFLHVDQUF1QztRQUN2QyxhQUFhO1FBQ2IsOENBQThDO1FBRTlDLElBQUk7SUFDTixDQUFDO0lBRUQsZ0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQWxDVSxVQUFVO1FBTHRCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM1QyxDQUFDO3lDQVFrQixlQUFNO1lBQ0UsdUJBQWM7WUFDcEIsaUJBQVE7WUFDTCwwQkFBVztPQVZ2QixVQUFVLENBbUN0QjtJQUFELGlCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBMaXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xpc3Qtc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zvcm0tZWRpdG9yJyxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtRWRpdG9yIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIGFjdGlvbjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxyXG4gICAgcHJpdmF0ZSBsaXN0U2VydmljZTogTGlzdFNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IGFjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMuYWN0aW9uID0gcGFyYW1zLmFjdGlvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlTGlzdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdFNlcnZpY2UuY3JlYXRlTGlzdCh0aGlzLnRpdGxlKTtcclxuICAgIHRoaXMuY2xvc2VGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2VGb3JtKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2NyZWF0ZS1saXN0Jykge1xyXG4gICAgLy8gICBkZWJ1Z2dlclxyXG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2NyZWF0ZS1pdGVtJykge1xyXG5cclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn0iXX0=