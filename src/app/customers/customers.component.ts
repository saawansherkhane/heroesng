import { Component, OnInit } from '@angular/core';
import { CustomersApiService } from '../customers-api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  submitted = false;
  customers: any[];
  name: string;
  email: string;
  phone: number;
  constructor(private customer_service: CustomersApiService) { }

  ngOnInit() {
    this.listcustomers();
  }

  listcustomers() {
    this.customer_service.customerslist()
      .subscribe(data => {
        this.customers = data;
        console.log('Customer List: ' + JSON.stringify(this.customers));
      });
  }

  onSubmitcustomer(name: string, email: string, phone: number) {
    this.submitted = true;
    console.log('C error : ' + JSON.stringify(this.name));
    this.customer_service.customercreate(this.name, this.email, this.phone)
     .subscribe(()=> this.listcustomers());
  }

}
