import{TestBed,async,ComponentFixture} from '@angular/core/testing'
import{DebugElement, NO_ERRORS_SCHEMA} from '@angular/core'
import{By} from '@angular/platform-browser'
import { ProductListComponent } from './product-list.component'
import { ProductService } from './product.service'
import { FormsModule } from '@angular/forms'
import { ProductPipe } from './product.pipe'
import { of } from 'rxjs'

describe('ProductListComponent Integrated',()=>{
let fixture:ComponentFixture<ProductListComponent>
let component:ProductListComponent
let element:HTMLElement
let debugEl:DebugElement
let mockProductService:ProductService

beforeEach((async()=>{
//let mockProductService={}
mockProductService=jasmine.createSpyObj([
    'getProducts',
    
])

TestBed.configureTestingModule({
   imports:[FormsModule],
   declarations:[ProductListComponent,
                ProductPipe] ,
   providers:[
       {provide:ProductService,useValue:mockProductService}
   ],
   schemas:[NO_ERRORS_SCHEMA]
})
}))
beforeEach(()=>{
    
    
  fixture=  TestBed.createComponent(ProductListComponent)
  component=fixture.componentInstance
  debugEl=fixture.debugElement
  element=fixture.nativeElement
  component.products=[
    {
        "id": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
    }          

]
})
describe('Initial display',()=>{
    it('should have the correct product name',()=>{
      mockProductService.getProducts.and.returnValue(of(component.products))
        
        fixture.detectChanges()
       // expect(element.querySelector('.pname').textContent).toContain('Leaf Rake')
       //Note : The line above will fail the test because uppercase pipe 
       //has been used to display the productName in product.list.component.html
       //file
        expect(element.querySelector('.pname').textContent).toContain('LEAF RAKE')
    })
})
})