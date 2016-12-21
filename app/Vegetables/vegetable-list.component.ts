import {Component,OnInit,trigger,state,transition,animate,keyframes,style} from '@angular/core'
import {IVegetable} from './vegetables'
import {VegetableService} from './vegetable.service'

@Component({
   
    moduleId: module.id,
    templateUrl:'vegetable-list.component.html',
    styleUrls: ['vegetable-list.component.css'],
    animations :[ 
        trigger('myTrigger',[
            
            state('small',style({
                transform: 'scale(1)'
            })),
            state('large',style({
                transform: 'scale(1.4)'
            })),
            transition('small =>large',animate('500ms ease-in')),
            transition('large =>small',animate('500ms'))
        ])]
})
export class VegetablelistComponent implements OnInit{

    pageTitle:string ='Vegetables';
    listFilter:string;
    imageWidth: number =50;
    imageMargin: number =2;
    showImage: boolean = false;
    vegetables: IVegetable[] ; 
    errorMessage: string;
    state:string= 'extra-large';
    constructor(private _vegetableService: VegetableService) {
        
    }

    toggleImage():void{
        this.showImage =!this.showImage;
    }
   ngOnInit(): void {
        this._vegetableService.getVegetables()
                .subscribe(v => this.vegetables = v,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message:string): void{
        this.pageTitle ='Vegetable star clicks!: '+ message;
    }
}