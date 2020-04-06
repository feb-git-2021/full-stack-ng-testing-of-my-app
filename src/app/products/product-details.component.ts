import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product:IProduct
pageTitle:string='Product Detail'
errorMessage:string
  constructor(private activateRoute:ActivatedRoute,
    private productService:ProductService,
    private router:Router
    ) { }

  ngOnInit() {
    const param = +this.activateRoute.snapshot.paramMap
    .get('id')
    if(param)
    this.pageTitle += `:${param}`
    this.productService.getProduct(param)
    .subscribe((product:IProduct)=>this.product=product,
    error => this.errorMessage=<any>error
    )
    //console.log(this.product + 'the detail') 
  }
  onBack(){
    this.router.navigate(['/products'])
  }
  

}
