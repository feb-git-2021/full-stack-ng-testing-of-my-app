import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import{RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test/test1.component';

import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';
import {AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './customers/customer.component';
import { CustomerReactComponent } from './customers/customer-react.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,    
    HomeComponent, 
    CustomerComponent,
     CustomerReactComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
   ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
