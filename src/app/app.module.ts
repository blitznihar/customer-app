import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CustomerService } from '../app/services/customerService'
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { FormsModule }   from '@angular/forms';

const appRoutes: Routes = [
  { path: '',
    redirectTo: 'list-customers',
    pathMatch: 'full'
  },
  { path: 'list-customers',
    component: ListCustomersComponent,
    data: { title: 'Customers List' }
  },
  {
    path: 'new-customer',
    component: CreateCustomerComponent,
    data: { title: 'New Customer' }
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomersComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
