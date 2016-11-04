import { Component, OnInit }  from '@angular/core';
import {IVegetable} from './vegetables';

import {VegetableService} from './vegetable.service'

@Component({
    selector: 'app-create-vegetable',
    templateUrl: 'app/Vegetables/vegetable-create.component.html'
})

export class VegetableCreateComponent implements OnInit{
pageTitle: string ='Create Vegetable'
public vegetable : IVegetable;
errorMessage: string;

 constructor(private vegetableService: VegetableService) { }

ngOnInit() {
 this.vegetable = {
     vegetableId: 10,
    vegetableName: null,
    vegetableCode: null,
    description: null,
    soldBy:null,
    price: null,   
    starRating: null,
    imageUrl: null,
 }

}
addVegetable() {            
        if (!this.vegetable) { return; }
        this.vegetableService.addVegetable(this.vegetable)
            .subscribe(
            vegetable => this.vegetable,
           error => this.errorMessage = <any>error);
    }

}