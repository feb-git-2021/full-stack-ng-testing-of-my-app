import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditGuard } from './product-edit.guard';


@NgModule({
    imports:[
      RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'products/:id',component:ProductDetailsComponent,
      canActivate:[ProductDetailGuard]
    },
    {path:'products/:id/edit',
    component:ProductEditComponent,
    canDeactivate:[ProductEditGuard]
  }

        ])
    ],
    exports:[RouterModule]
})

export class ProductRoutingModule{}