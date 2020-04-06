import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }
customer = new Customer()
  ngOnInit() {
    
  }
  save(customerForm:NgForm){
    console.log(customerForm.form)
    console.log('Saved :' 
    + JSON.stringify(customerForm.value))
  }

}
