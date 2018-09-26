import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer'

@Injectable()
export class CustomersApiService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private customersUrl = 'http://localhost:3000/api/v1/customers/customer';  // URL to web api
  private custUrl = 'http://localhost:3000/api/v1/customers/customer';  // URL to web api
  private custstatusUrl = 'http://localhost:3000/api/v1/customers/customer';  // URL to web api

  constructor(private http: Http) {
  }

  customerslist(): Observable<any[]>{
    return this.http.get("http://localhost:3000/api/v1/customers/customer", {headers: this.headers})
      .map((response: Response) => {
        return response.json();
      });
  }

  customercreate(name: string, email: string, phone: number): Observable<any[]>{
   return this.http.post("http://localhost:3000/api/v1/customers/create", {name: name, email: email, phone: phone}, {headers: this.headers})
     .map((response: Response) => {
       return response.json();
     });
  }

  /** GET hero by id. Will 404 if id not found */
  getCust(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}/edit`;
    return this.http.get(url, {headers: this.headers})
      .map((response: Response) => {
        console.log('EDIT cust Response: ' + JSON.stringify(id));
        return response.json();
    });
  }

  /** PUT: update the hero on the server */
  updateCustomer(cust: Customer): Observable<any> {
    const url = `${this.custUrl}/${cust.id}`;
    return this.http.put(url, cust, {headers: this.headers})
      .map((response: Response) => {
        console.log('UPDATE cust Response: ' + JSON.stringify(cust));
        return response.json();
      });
  }


  activatecustomer(cust: Customer): Observable<any> {
    const url = `${this.custstatusUrl}/${cust.id}/activate`;
    return this.http.put(url, cust, {headers: this.headers})
      .map((response: Response) => {
        console.log('Activate cust Response: ' + JSON.stringify(cust));
        return response.json();
      });
  }

  deactivatecustomer(cust: Customer): Observable<any> {
    const url = `${this.custstatusUrl}/${cust.id}/deactivate`;
    return this.http.put(url, cust, {headers: this.headers})
      .map((response: Response) => {
        console.log('Deactivate cust Response: ' + JSON.stringify(cust));
        return response.json();
      });
  }


}
