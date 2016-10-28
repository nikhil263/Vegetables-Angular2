import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {WelcomeComponent} from './home/welcome.component';
import {StarComponent} from './shared/star.component';
import {VegetablelistComponent} from './vegetables/Vegetable-list.Component';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {VegetableFilterPipe} from './vegetables/Vegetable-Filter.Pipe';

@NgModule({
  imports: [ BrowserModule,HttpModule,FormsModule ],
  declarations: [ AppComponent,
  WelcomeComponent,
   VegetablelistComponent,
   VegetableFilterPipe,
   StarComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
