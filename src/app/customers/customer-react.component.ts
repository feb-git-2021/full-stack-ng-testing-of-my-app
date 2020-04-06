import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
import { Customer } from './customer';

@Component({
  selector: 'app-customer-react',
  templateUrl: './customer-react.component.html',
  styleUrls: ['./customer-react.component.css']
})
export class CustomerReactComponent implements OnInit {
customerForm:FormGroup
customer = new Customer()
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    // this.customerForm= new FormGroup({
    //   firstName:new FormControl(),
    //   lastName:new FormControl(),
    //   email:new FormControl('abc@dcv')

    // })
    // this.customerForm=this.fb.group({
    //   firstName:'',
    //   lastName:'',
    //   email:''
    // })  
    this.customerForm=this.fb.group({
      firstName:['',[Validators.required,
        Validators.minLength(3)]],
      lastName:['',[Validators.required,
        Validators.maxLength(30)]],
      email:['',
      Validators.pattern('[a-z0-9.%+-]+@[a-z0-9.-]+')]
    })  
  }
  save(){
    console.log(this.customerForm)
    console.log('Saved :' 
    + JSON.stringify(this.customerForm.value))

  }
  populateTestData(){
    this.customerForm.patchValue({
      firstName:'Lucert',
      email:'abc@y.com'
    })
  }

}
