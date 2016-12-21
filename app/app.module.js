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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var welcome_component_1 = require('./home/welcome.component');
var vegetable_list_Component_1 = require('./vegetables/vegetable-list.Component');
var vegetable_detail_Component_1 = require('./vegetables/vegetable-detail.Component');
var Vegetable_Filter_Pipe_1 = require('./vegetables/Vegetable-Filter.Pipe');
var star_component_1 = require('./shared/star.component');
var vegetable_create_component_1 = require('./vegetables/vegetable-create.component');
var howto_component_1 = require('./howto/howto.component');
var examples_component_1 = require('./examples/examples.component');
//https://github.com/HNeukermans/Ng2a.Frontend/blob/master/src/app/domain/auth.provider.ts
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'vegetables', component: vegetable_list_Component_1.VegetablelistComponent },
                    { path: 'vegetable/:id', component: vegetable_detail_Component_1.VegetableDetailComponent },
                    { path: 'AddVegetables', component: vegetable_create_component_1.VegetableCreateComponent },
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: 'howto', component: howto_component_1.HowtoComponent },
                    { path: 'examples', component: examples_component_1.ExamplesComponent },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ])],
            declarations: [app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                vegetable_list_Component_1.VegetablelistComponent,
                vegetable_detail_Component_1.VegetableDetailComponent,
                Vegetable_Filter_Pipe_1.VegetableFilterPipe,
                vegetable_create_component_1.VegetableCreateComponent,
                howto_component_1.HowtoComponent,
                examples_component_1.ExamplesComponent,
                star_component_1.StarComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map