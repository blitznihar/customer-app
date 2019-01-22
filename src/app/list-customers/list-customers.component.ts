import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CustomerService } from '../services/customerService'
import { Customer } from '../model/Customer'


@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  customers: Array<Customer>;
  constructor(private customerService:CustomerService ) {
    this.customerService.getCustomers().subscribe(customers=>{
      this.customers = JSON.parse(customers);
    })
}
  ngOnInit() {
  }

}



