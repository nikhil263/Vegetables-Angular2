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
var ExamplesComponent = (function () {
    function ExamplesComponent() {
        this.state = 'in';
        this.ourItems = [
            'Start the new app project',
            'Work on blog',
            'Lunch at 1'
        ];
    }
    ExamplesComponent.prototype.ngOnInit = function () {
        this.state = (this.state === 'in' ? 'out' : 'in');
    };
    ExamplesComponent.prototype.toggleFocus = function () {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    };
    ExamplesComponent.prototype.submitItem = function (event) {
        this.ourItems.push(event.target.value);
        event.target.value = '';
    };
    ExamplesComponent.prototype.removeItem = function (event, i) {
        this.ourItems.splice(i, 1);
    };
    ExamplesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-examples',
            templateUrl: 'examples.component.html',
            styleUrls: ['examples.component.scss'],
            animations: [
                core_1.trigger('focusPanel', [
                    core_1.state('inactive', core_1.style({
                        transform: 'scale(1)'
                    })),
                    core_1.state('active', core_1.style({
                        transform: 'scale(1.04)'
                    })),
                    core_1.transition('inactive => active', core_1.animate('500ms ease-in')),
                    core_1.transition('active => inactive', core_1.animate('500ms ease-out'))
                ]),
                core_1.trigger('note', [
                    core_1.state('inactive', core_1.style({
                        opacity: '0'
                    })),
                    core_1.state('active', core_1.style({
                        opacity: '1'
                    })),
                    core_1.transition('inactive => active', [
                        core_1.animate(300, core_1.keyframes([
                            core_1.style({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
                            core_1.style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.6 }),
                            core_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                        ]))
                    ]),
                    core_1.transition('active => inactive', [
                        core_1.animate(300, core_1.keyframes([
                            core_1.style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                            core_1.style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.7 }),
                            core_1.style({ opacity: 0, transform: 'translateY(100%)', offset: 1 }),
                        ]))
                    ])
                ]),
                core_1.trigger('itemEnter', [
                    core_1.state('in', core_1.style({ transform: 'translateY(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateY(-100%)', opacity: 0 }),
                        core_1.animate('300ms ease-out')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('300ms ease-out', core_1.style({ transform: 'scaleY(0) translateY(200px)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());
exports.ExamplesComponent = ExamplesComponent;
//# sourceMappingURL=examples.component.js.map