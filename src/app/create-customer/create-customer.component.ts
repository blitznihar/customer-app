import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomerService } from '../services/customerService'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  
  constructor(private customerService:CustomerService, private router: Router ) {}
  
  customer = new Customer("","","","","12/24/2015");

  ngOnInit() {

  }
onClickSubmit(customer) {
     this.customerService.createCustomers(customer)
     .subscribe(
       customers=>{console.log("submitted")},
       error=>{console.error},
       ()=>{
         console.log("value posted");
         this.router.navigate(['/']);
        } )
     

   }
}
