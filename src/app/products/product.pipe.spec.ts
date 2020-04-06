import { ProductPipe } from "./product.pipe"
import { IProduct } from './product'

describe('ProductPipe',()=>{
    const product:IProduct[] =[
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
        

    it('should create an instance',()=>{
        let pipe = new ProductPipe()
        //let pipe
        expect(pipe).toBeTruthy()
    })
    it('should display the correct length from list of products',()=>{
       let filterBy:string
       let value:IProduct[]=product
      
        
        let pipe = new ProductPipe()
        const result = pipe.transform(value,filterBy)
      let finalRes=  filterBy?value.filter((product:IProduct)=>product.productName.
    toLocaleLowerCase().indexOf(filterBy)!==-1):value
    console.log(finalRes)
       expect(result.length).toEqual(2)
    })
    it ('should return an EMPTY ARRAY if no products are present',()=>{
        let pipe = new ProductPipe()
        const product=[]
        const result = pipe.transform(product,'')
        expect(result.length).toBe(0)
    })
    xit('should display the correct name  from list of products',()=>{
        let filterBy:string
        let value:IProduct[]=product
       
         
         let pipe = new ProductPipe()
         const result = pipe.transform(value,filterBy)
       let finalRes=  filterBy?value.filter((product:IProduct)=>product.productName.
     toLocaleLowerCase().indexOf(filterBy)!==-1):value
     console.log(finalRes)
       // expect(finalRes).toMatch()
     })


})