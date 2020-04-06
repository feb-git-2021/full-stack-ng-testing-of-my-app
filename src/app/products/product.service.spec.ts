import { TestBed, inject } from "@angular/core/testing"
import {HttpClientTestingModule,HttpTestingController} from 
'@angular/common/http/testing'
import { ProductService } from './product.service'
import { IProduct } from './product'
describe('ProductService',()=>{
    let service:ProductService
    let httpTestingController:HttpTestingController

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[ProductService]
        })
        httpTestingController =TestBed.get(HttpTestingController)
    })
    it('should create an instance of product service',()=>{
        service=TestBed.get(ProductService)
        expect(service).toBeTruthy()
    })
    describe('productServiceMethods:(getProduct)', ()=>{
       
        it('should call get with correct URL',inject([
            ProductService,HttpTestingController],
            (service:ProductService,controller:HttpTestingController)=>{
                service.getProduct(1).subscribe()
                const request =controller.expectOne('api/products/1')
                request.flush({
        "id": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
                })
                controller.verify()
            }
        ))
        it('should return an Observable<IProducts[]>',()=>{
            const products:IProduct[]=[
                {
                    "id": 1,
                    "productName": "Leaf Rake",
                    "productCode": "GDN-0011",
                    "releaseDate": "March 19, 2016",
                    "description": "Leaf rake with 48-inch wooden handle.",
                    "price": 19.95,
                    "starRating": 3.2,
                    "imageUrl": "assets/images/leaf_rake.png"
                },
                {
                    "id": 2,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": "March 18, 2016",
                    "description": "15 gallon capacity rolling garden cart",
                    "price": 32.99,
                    "starRating": 4.2,
                    "imageUrl": "assets/images/garden_cart.png"
                }

            ]
            service.getProducts().subscribe(products=>{
               
            })
            
        })
    })
})

