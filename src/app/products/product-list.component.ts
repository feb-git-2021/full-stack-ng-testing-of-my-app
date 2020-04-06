import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
pageTitle='Product-List'
showImage:boolean=false
listFilter:string
products:IProduct[]=[]
filteredProducts: IProduct[] = [];
errorMessage:string

  constructor(private productService:ProductService) { }

  ngOnInit() {
    
    console.log('Life cycle hook method executed')
   //this.products=this.productService.getProducts()


//    this.productService.getProducts()
   
//    .subscribe((data:IProduct[])=>this.products=data,
//    error => this.errorMessage=<any>error
  
//  )
this.productService.getProducts().subscribe({
  next: products => {
    this.products = products;
    this.filteredProducts = this.products;
  },
  error: err => this.errorMessage = err
});
  }

  toggleImage():void{
      this.showImage = !this.showImage
  }
  onRatingClicked(message:string):void{
      this.pageTitle='Product List:'+message
  }

}
