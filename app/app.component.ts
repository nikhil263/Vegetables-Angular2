import { Component } from '@angular/core';

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
     `
})
export class AppComponent { 

    pageTitle: string = "Vegetable Market";
}
