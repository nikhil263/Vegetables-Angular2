import { Component } from '@angular/core';
import {VegetableService} from './vegetables/vegetable.service'

@Component({
    selector: 'pm-app',
    template: `<div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>                      
            </div>
        </nav>
        <div class='container'>
           <pm-vegetables></pm-vegetables>  
        </div>
     </div>
     `,
     providers:[VegetableService]
})
export class AppComponent { 

    pageTitle: string = "Vegetable Market";
}
