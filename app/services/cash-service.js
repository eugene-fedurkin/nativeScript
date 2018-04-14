"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var list_model_1 = require("~/models/list-model");
var item_model_1 = require("~/models/item-model");
var CashService = /** @class */ (function () {
    function CashService() {
        this.searchValueToLists = '';
        this.filteredLists = [];
        this.lists = [];
        this.isOnline = false;
        this.listId = 0;
        this.gen();
        this.updateFiltredList();
    }
    CashService.prototype.gen = function () {
        for (var i = 0; i < 7; i++) {
            var list = new list_model_1.ListModel();
            list.title = 'title' + i;
            list.id = i;
            list.items = [];
            for (var z = i + 10; z < 30; z++) {
                var item = new item_model_1.ItemModel();
                item.title = 'title' + z;
                item.listId = list.id;
                item.description = '' + Math.random();
                item.id = z;
                list.items.push(item);
            }
            this.lists.push(list);
        }
    };
    CashService.prototype.updateFiltredList = function () {
        var _this = this;
        this.filteredLists = this.lists.filter(function (list) { return !list.title.indexOf(_this.searchValueToLists); });
    };
    CashService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CashService);
    return CashService;
}());
exports.CashService = CashService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzaC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FzaC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLGtEQUFnRDtBQUNoRCxrREFBZ0Q7QUFHaEQ7SUFRRTtRQU5PLHVCQUFrQixHQUFXLEVBQUUsQ0FBQztRQUNoQyxrQkFBYSxHQUFnQixFQUFFLENBQUM7UUFDaEMsVUFBSyxHQUFnQixFQUFFLENBQUM7UUFDeEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR3hCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNWLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFFTyx5QkFBRyxHQUFYO1FBQ0UsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQixJQUFNLElBQUksR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDakMsSUFBTSxJQUFJLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUM7WUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUVNLHVDQUFpQixHQUF4QjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBbENVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTs7T0FDQSxXQUFXLENBbUN2QjtJQUFELGtCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExpc3RNb2RlbCB9IGZyb20gJ34vbW9kZWxzL2xpc3QtbW9kZWwnO1xyXG5pbXBvcnQgeyBJdGVtTW9kZWwgfSBmcm9tICd+L21vZGVscy9pdGVtLW1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhc2hTZXJ2aWNlIHtcclxuXHJcbiAgcHVibGljIHNlYXJjaFZhbHVlVG9MaXN0czogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGZpbHRlcmVkTGlzdHM6IExpc3RNb2RlbFtdID0gW107XHJcbiAgcHVibGljIGxpc3RzOiBMaXN0TW9kZWxbXSA9IFtdO1xyXG4gIHB1YmxpYyBpc09ubGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBsaXN0SWQ6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyAvLyBUT0RPOiBkZWxldGVcclxuICAgIHRoaXMuZ2VuKClcclxuICAgIHRoaXMudXBkYXRlRmlsdHJlZExpc3QoKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW4oKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICBjb25zdCBsaXN0ID0gbmV3IExpc3RNb2RlbCgpO1xyXG4gICAgICBsaXN0LnRpdGxlID0gJ3RpdGxlJyArIGk7XHJcbiAgICAgIGxpc3QuaWQgPSBpO1xyXG4gICAgICBsaXN0Lml0ZW1zID0gW107XHJcbiAgICAgIGZvciAobGV0IHogPSBpICsgMTA7IHogPCAzMDsgeisrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtTW9kZWwoKTtcclxuICAgICAgICBpdGVtLnRpdGxlID0gJ3RpdGxlJyArIHo7XHJcbiAgICAgICAgaXRlbS5saXN0SWQgPSBsaXN0LmlkO1xyXG4gICAgICAgIGl0ZW0uZGVzY3JpcHRpb24gPSAnJyArIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgaXRlbS5pZCA9IHo7XHJcbiAgICAgICAgbGlzdC5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxpc3RzLnB1c2gobGlzdClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVGaWx0cmVkTGlzdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZmlsdGVyZWRMaXN0cyA9IHRoaXMubGlzdHMuZmlsdGVyKGxpc3QgPT4gIWxpc3QudGl0bGUuaW5kZXhPZih0aGlzLnNlYXJjaFZhbHVlVG9MaXN0cykpO1xyXG4gIH1cclxufSJdfQ==