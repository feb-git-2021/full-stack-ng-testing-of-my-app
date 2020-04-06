import{ProductEditComponent} from '../products/product-edit.component'
import {ComponentFixture,TestBed} from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { ProductService } from './product.service'
import { of } from 'rxjs'

describe('Edit product Component',()=>{
let component:ProductEditComponent
let fixture:ComponentFixture<ProductEditComponent>
let mockRouter:Router
let mockActivatedRoute:ActivatedRoute
let mockProductService:ProductService
beforeEach(async()=>{
    TestBed.configureTestingModule({
        imports:[
            FormsModule,
            ReactiveFormsModule
        ],
        declarations:[ProductEditComponent],
        providers:[
            {provide:ActivatedRoute, useValue: { snapshot: { paramMap: {get:(id:number)=>{id:0}}}}},
            {provide:Router,useValue:mockRouter},
            {provide:ProductService,useValue:mockProductService}
        ],
        schemas:[NO_ERRORS_SCHEMA]
        
    }).compileComponents()
    // mockActivatedRoute.paramMap.subscribe(
    //     params=>{
    //         const id = +params.get('id')
    //         this.getProduct(id)
    //       }  
    //       )
        
       
    
    fixture=TestBed.createComponent(ProductEditComponent)
    component=fixture.componentInstance
   // component.ngOnInit()
    //fixture.detectChanges()
})
    it('should define EditproductComponent',()=>{
        expect(component).toBeDefined()
    })
  
})