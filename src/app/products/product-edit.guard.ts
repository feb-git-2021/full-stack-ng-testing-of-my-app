import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductEditComponent } from './product-edit.component';

@Injectable({
  providedIn: 'root'
})
export class ProductEditGuard implements 
CanDeactivate<ProductEditComponent> {
  canDeactivate(component:ProductEditComponent
    ): boolean{
      if(component.productForm.dirty){
        const productName=component.productForm
        .get('productName').value || 'New Product'
      return   confirm(`Navigate away and loose all changes
       to ${productName}`)
      }
    return true;
  }
  
}
