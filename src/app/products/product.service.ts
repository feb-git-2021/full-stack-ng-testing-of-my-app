import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import {tap,catchError, map} from 'rxjs/operators'
//this was till verion 5
//@Injectable()
//the below was in version 6
@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:IProduct[]
//productUrl:string ='assets/api/products/products.json'
productUrl:string='api/products'
//productUrl:string='http://localhost:57615/api'
  constructor(private httpClient:HttpClient) { }

  // getProducts():IProduct[]{
  //   return this.products
  // }

  
  getProducts(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this.productUrl)
       .pipe(
        tap(data => console.log('getProducts: ' + JSON.stringify(data))),
        catchError(this.handleError)
       )
}
//getProduct(id) before edit and add product
  // getProduct(id:number):Observable<IProduct>{
  //   return this.getProducts()
  //   .pipe(
  //     map((data:IProduct[])=>data
  //     .find((p)=>p.id==id)),
  //     catchError(this.handleError)
  //   )
  // }
  getProduct(id:number):Observable<IProduct>{
    if(id===0){
      return of (this.initializeProduct())
    }
    const url =`${this.productUrl}/${id}`
    return this.httpClient.get<IProduct>(url)
    .pipe(
      tap(data=>console.log('Get Product:'
      +JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  updateProduct(product:IProduct):Observable<IProduct>{
    const headers= new HttpHeaders({
      'Content-Type':'application/json'
    })
    const url =`${this.productUrl}/${product.id}`
    return this.httpClient.put<IProduct>(url,product,
      {headers:headers})
      .pipe(tap(()=>console.log('update Product:'+product.id)),
      map(()=>product),
      catchError(this.handleError)
      )
    }
   createProduct(product:IProduct):Observable<IProduct>{
     const headers=new HttpHeaders({
       'Content-Type':'application/json'
     })
  product.id=null
 return this.httpClient.post<IProduct>(
   this.productUrl,product,
 {headers:headers})
 .pipe(
   tap(data=>console.log('Create Product :' 
   + JSON.stringify(data))),
   catchError(this.handleError)
 )
   } 
   deleteProduct(id:number):Observable<{}>{
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    const url =`${this.productUrl}/${id}`
     return this.httpClient.delete(url,{headers})
     .pipe(
       tap(data=>console.log('delete product:'+id)),
       catchError(this.handleError)
     )
   }
  
  private initializeProduct():IProduct{
    //return a product initializer
      return{
        id:0,
        productName:null,
        productCode:null,
        releaseDate:null,
        price:null,
        description:null,
        starRating:null,
        imageUrl:null

      }
  }
  private handleError(err:HttpErrorResponse){
    let errorMessage=''
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured ${err.error}`
    }
    else{
      errorMessage=` Server returned code : ${err.status}, 
      error message is ${err.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage)

  }

  
  // getProducts():Observable<IProduct[]>{
  //   //console.log(this.httpClient.get<IProduct[]>(this.productUrl).toPromise())
  //   return this.httpClient.get<IProduct[]>(this.productUrl).toPromise
  // }


}
