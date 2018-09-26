import { Component, OnInit, Input } from '@angular/core';
import {AccountsApiService} from "../accounts-api.service";
import { Account } from '../account';
import {Customer} from "../customer";
import {ActivatedRoute} from "@angular/router";
import {CustomersApiService} from "../customers-api.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  @Input() customer_id;
  accounts = [];
  submitted = false;
  opened_date: Date;
  balance: boolean;
  meta_name: string;

  constructor( private route: ActivatedRoute, private location: Location, private acc_service: AccountsApiService) { }

  ngOnInit() {
    this.listaccounts();
  }

  listaccounts() {
    this.acc_service.accountslist(this.customer_id)
      .subscribe(data => {
        this.accounts = data;
        console.log('Account List: ' + JSON.stringify(this.accounts));
      });
  }

  onSubmitaccount(customer_id: string, opened_date: Date, balance: boolean, meta_name: string) {
    this.submitted = true;
    this.acc_service.accountcreate(this.customer_id, this.opened_date, this.balance, this.meta_name)
      .subscribe(data => {
        this.accounts = data;
        console.log('Account Create: ' + JSON.stringify(this.accounts));
        console.log('A C : ' + JSON.stringify(this.opened_date));
      });
  }

}
