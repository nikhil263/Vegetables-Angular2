import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {WelcomeComponent} from './home/welcome.component';
import {VegetablelistComponent} from './vegetables/Vegetable-list.Component';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [ BrowserModule,HttpModule ],
  declarations: [ AppComponent,WelcomeComponent, VegetablelistComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
