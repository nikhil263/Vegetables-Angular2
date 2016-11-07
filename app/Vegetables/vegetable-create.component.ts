import { Component, OnInit }  from '@angular/core';
import {IVegetable} from './vegetables';
import { ActivatedRoute,Router } from '@angular/router';
import {VegetableService} from './vegetable.service'

@Component({
    selector: 'app-create-vegetable',
    templateUrl: 'app/Vegetables/vegetable-create.component.html'
})

export class VegetableCreateComponent implements OnInit{
pageTitle: string ='Create Vegetable'
public vegetable : IVegetable;
errorMessage: string;

 constructor(private vegetableService: VegetableService, private _router :Router,private  _route :ActivatedRoute) { }

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

vegetableNametoUpperCase(value:string){
if(value.length >0)
this.vegetable.vegetableName = value.charAt(0).toUpperCase()+ value.slice(1);
else
this.vegetable.vegetableName =value;
}
addVegetable() {            
        if (!this.vegetable) { return; }
        this.vegetableService.addVegetable(this.vegetable)
            .subscribe(
            vegetable => this.vegetable,
           error => this.errorMessage = <any>error);

         this._router.navigate(['/vegetables']);
    }

}