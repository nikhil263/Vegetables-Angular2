"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var vegetable_service_1 = require('./vegetable.service');
var VegetableCreateComponent = (function () {
    function VegetableCreateComponent(vegetableService) {
        this.vegetableService = vegetableService;
        this.pageTitle = 'Create Vegetable';
    }
    VegetableCreateComponent.prototype.ngOnInit = function () {
        this.vegetable = {
            vegetableId: 10,
            vegetableName: null,
            vegetableCode: null,
            description: null,
            soldBy: null,
            price: null,
            starRating: null,
            imageUrl: null,
        };
    };
    VegetableCreateComponent.prototype.addVegetable = function () {
        var _this = this;
        if (!this.vegetable) {
            return;
        }
        this.vegetableService.addVegetable(this.vegetable)
            .subscribe(function (vegetable) { return _this.vegetable; }, function (error) { return _this.errorMessage = error; });
    };
    VegetableCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-create-vegetable',
            templateUrl: 'app/Vegetables/vegetable-create.component.html'
        }), 
        __metadata('design:paramtypes', [vegetable_service_1.VegetableService])
    ], VegetableCreateComponent);
    return VegetableCreateComponent;
}());
exports.VegetableCreateComponent = VegetableCreateComponent;
//# sourceMappingURL=vegetable-create.component.js.map