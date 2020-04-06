import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductPipe } from './product.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import{InMemoryWebApiModule} from 'angular-in-memory-web-api'
import { ProductData } from './product-data';
import { ProductEditComponent } from './product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductPipe,
    ProductEditComponent

  ],
  imports: [ 
         
   ProductRoutingModule,
   SharedModule,
   InMemoryWebApiModule.forRoot(ProductData)
  ]

})
export class ProductModule { }
