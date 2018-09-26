import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CustomersApiService }  from '../customers-api.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() cust: Customer;
  accountcreate = false;

  constructor(
    private route: ActivatedRoute,
    private custService: CustomersApiService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.custService.getCust(id)
      .subscribe(cust => this.cust = cust);
      console.log('My cust Id: ' + JSON.stringify(this.cust));
      // .subscribe(cust => {
      //       this.cust = cust
      //     }, error => {
      //
      //     },
      //     ()=> {
      //
      //     }
      //   );
  }

  goBack(): void {
    this.location.back();
  }

  savecust(): void{
    this.custService.updateCustomer(this.cust)
      .subscribe(() => this.goBack());
  }

  activation(cust): void{
    this.custService.activatecustomer(cust)
      .subscribe(() => this.getCustomer());
  }

  deactivation(cust): void{
    this.custService.deactivatecustomer(cust)
      .subscribe(() => this.getCustomer());
  }

  createaccount(): void{
    if (this.accountcreate == true) {
      this.accountcreate = false;
    } else {
      this.accountcreate = true;
    }
  }
}
