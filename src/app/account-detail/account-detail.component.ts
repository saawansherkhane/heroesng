import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {AccountsApiService} from "../accounts-api.service";
import {Account} from "../account";

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  @Input() acc: Account;
  account_id: any;
  deposit_bal: boolean;
  withdraw_bal: boolean;
  to_id: string;
  transfer_bal: boolean;

  constructor(private route: ActivatedRoute, private location: Location, private acc_service: AccountsApiService) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount() {
    const customer_id = +this.route.snapshot.paramMap.get('customer_id');
    this.acc_service.getAcc(customer_id)
      .subscribe(acc => this.acc = acc);
    console.log('My acc Id: ' + JSON.stringify(this.acc));
  }

  goBack(): void {
    this.location.back();
  }

  activate_acc(acc): void{
    this.acc_service.activateaccount(acc)
      .subscribe(() => this.getAccount());
  }

  deactivate_acc(acc): void{
    this.acc_service.deactivateaccount(acc)
      .subscribe(() => this.getAccount());
  }

  depositamount(account_id: string, deposit_bal: boolean){
    this.account_id = this.acc.id;
    this.acc_service.amountdeposit(this.account_id, this.deposit_bal)
      .subscribe(() => this.getAccount());
  }

  withdrawamount(account_id: string, withdraw_bal: boolean){
    this.account_id = this.acc.id;
    this.acc_service.amountwithdraw(this.account_id, this.withdraw_bal)
      .subscribe(() => this.getAccount());
  }

  transferamount(account_id: string, to_id: string, transfer_bal: boolean ){
    this.account_id = this.acc.id;
    this.acc_service.amounttransfer(this.account_id, this.to_id, this.transfer_bal)
      .subscribe(() => this.getAccount());
  }

}
