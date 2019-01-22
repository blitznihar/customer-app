//a simple service
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Customer } from '../model/Customer'
@Injectable()
export class CustomerService {
  private apiUrl = "http://localhost:5008/api/v1/customers";
  customers: Array<Customer>;
  customer: Customer;
  constructor(private http: Http) {
    this.getCustomers();
  }
  getCustomers() {
    return this.http.get(this.apiUrl)
      .pipe(map((response: any) => response.json()))
  }
  createCustomers(customer: Customer): Observable<Customer> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl, customer, options).pipe(map(this.extractData));
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}