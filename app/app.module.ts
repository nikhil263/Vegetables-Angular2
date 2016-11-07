import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {MaterialModule} from '@angular/material';

import { AppComponent }  from './app.component';
import {WelcomeComponent} from './home/welcome.component';

import {VegetablelistComponent} from './vegetables/vegetable-list.Component';
import {VegetableDetailComponent} from './vegetables/vegetable-detail.Component';
import {VegetableFilterPipe} from './vegetables/Vegetable-Filter.Pipe';
import {StarComponent} from './shared/star.component';
import {VegetableCreateComponent} from './vegetables/vegetable-create.component';


@NgModule({
  imports: [ BrowserModule,
  HttpModule,
  FormsModule,
  RouterModule.forRoot([     
      { path: 'vegetables', component: VegetablelistComponent },
      { path: 'vegetable/:id', component: VegetableDetailComponent },
      { path: 'AddVegetables', component: VegetableCreateComponent},
       { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]) ],
  declarations: [ AppComponent,
  WelcomeComponent,
   VegetablelistComponent,
   VegetableDetailComponent,
   VegetableFilterPipe,
   VegetableCreateComponent,
   StarComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
