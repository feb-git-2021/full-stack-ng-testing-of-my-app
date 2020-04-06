import { ProductListComponent } from "./product-list.component"
import { of } from 'rxjs'

describe('ProductListComponent isolated',()=>{
    let component:ProductListComponent
    let PRODUCTS
    let mockProductService


    beforeEach(()=>{
        PRODUCTS=[
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
            }]
            mockProductService=jasmine.createSpyObj([
                'getProducts'
            ])
            component= new ProductListComponent(mockProductService)
    })    
        it('should dispaly the correct list of products',()=>{
            component.filteredProducts=PRODUCTS
            expect(component.filteredProducts.length).toBe(2)
        })
        it('should display the list of products with subscribe method',()=>{
            mockProductService.getProducts.and.returnValue(of(true))
            component.filteredProducts=PRODUCTS
            expect(component.filteredProducts.length).toBe(2)
        })
        
  
})