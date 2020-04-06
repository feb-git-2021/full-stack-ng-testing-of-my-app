import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NumberValidators } from '../shared/number.validator';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { GeneralValidator } from '../shared/general.validator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  pageTitle:string='ProductEdit'
  errorMessage:string
productForm:FormGroup
product:IProduct
sub:Subscription

displayMessage:{[key:string]:string}={};
 private validationMessages: { [key: string]: { [key: string]: string } };
 private _genValidator:GeneralValidator
  constructor(private fb:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    private router:Router) { 
      this.validationMessages = {
        productName: {
            required: 'Product name is required.',
            minlength: 'Product name must be at least three characters.',
            maxlength: 'Product name cannot exceed 50 characters.'
        },
        productCode: {
            required: 'Product code is required.'
        },
        starRating: {
            range: 'Rate the product between 1 (lowest) and 5 (highest).'
        }
    };
    this._genValidator = new GeneralValidator(this.validationMessages)
    }
  

  ngOnInit() {
    this.productForm=this.fb.group({
      productName:['',[Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)]],
      productCode:['',Validators.required],
      starRating:['',NumberValidators.range(1,5)]  ,
      description:['']
    })
    this.sub = this.activatedRoute.paramMap.subscribe(
    params=>{
      const id = +params.get('id')
      this.getProduct(id)
    }  
    )
   
  }
 
  getProduct(id){
    this.productService.getProduct(id)
    .subscribe({
      next:(product:IProduct)=>this.displayProduct(product),
      error:err=>this.errorMessage=err
    })
  }
  displayProduct(product:IProduct):void{
    if(this.productForm){
      this.productForm.reset()
    }
    this.product=product
    if(this.product.id ===0){
      this.pageTitle='AddProduct'
    }
    else{
      this.pageTitle =`Edit Product : ${product.productName}`
    }
    this.productForm.patchValue({
      productName:this.product.productName,
      productCode:this.product.productCode,
      starRating:this.product.starRating,
      description:this.product.description
    })
  }
  saveProduct():void{
    if(this.productForm.valid){
      if(this.productForm.dirty){
        const p ={...this.product,...this.productForm.value}
        if(p.id===0){
          this.productService.createProduct(p).
          subscribe({
            next:()=>this.onSaveComplete(),
            error:err=>this.errorMessage=err
          })
        }else{
          this.productService.updateProduct(p)
          .subscribe({
            next:()=>this.onSaveComplete(),
            error:err=>this.errorMessage=err
          })
        }
      }
      
      
      }
    }
    deleteProduct():void{
      if(this.product.id===0){
        this.onSaveComplete()
      }else{
        if(confirm(`Really want to delete the product? 
        ,${this.product.productName}`)){
          this.productService.deleteProduct(this.product.id)
          .subscribe({
            next:()=>this.onSaveComplete(),
            error:err=>this.errorMessage=err
          })
        }
      }
    }
  
  onSaveComplete():void{
    this.productForm.reset()
    this.router.navigate(['/products'])
  }

}
