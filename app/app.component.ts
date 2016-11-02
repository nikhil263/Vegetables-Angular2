import { Component } from '@angular/core';
import {VegetableService} from './vegetables/vegetable.service'


@Component({
  selector: 'pm-app',
  templateUrl: './app/app.component.html',
    providers:[VegetableService]
})

export class AppComponent { 

    pageTitle: string = "Vegetable Market";
}
