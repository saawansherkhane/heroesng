import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Account} from "./account";
import {Customer} from "./customer";

@Injectable()
export class AccountsApiService {

  private accstatusUrl = 'http://localhost:3000/api/v1/accounts/account';  // URL to web api
  private accountsUrl = 'http://localhost:3000/api/v1/accounts/account';  // URL to web api
  private accdepositUrl = 'http://localhost:3000/api/v1/accounts/account';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {
  }

  /** GET hero by id. Will 404 if id not found */
  getAcc(customer_id: number): Observable<Account> {
    const url = `${this.accountsUrl}/${customer_id}/edit`;
    return this.http.get(url, {headers: this.headers})
      .map((response: Response) => {
        console.log('EDIT acc Response: ' + JSON.stringify(customer_id));
        return response.json();
      });
  }

  accountslist(customer_id: string): Observable<any[]>{
    return this.http.get("http://localhost:3000/api/v1/accounts/account", {headers: this.headers, params: {customer_id: customer_id}})
      .map((response: Response) => {
        console.log('R customer_id AC : ' + JSON.stringify(customer_id));
        return response.json();
      });
  }

  accountcreate( customer_id: string, opened_date: Date, balance: boolean, meta_name: string): Observable<any>{
    return this.http.post("http://localhost:3000/api/v1/accounts/create", {customer_id: customer_id, opened_date: opened_date, balance: balance, meta_name: meta_name}, {headers: this.headers})
      .map((response: Response) => {
        console.log('R AC : ' + JSON.stringify(opened_date));
        return response.json();
      });
  }


  activateaccount(acc: Account): Observable<any> {
    const url = `${this.accstatusUrl}/${acc.id}/activate`;
    return this.http.put(url, acc, {headers: this.headers})
      .map((response: Response) => {
        console.log('Activate acc Response: ' + JSON.stringify(acc));
        return response.json();
      });
  }

  deactivateaccount(acc: Account): Observable<any> {
    const url = `${this.accstatusUrl}/${acc.id}/deactivate`;
    return this.http.put(url, acc, {headers: this.headers})
      .map((response: Response) => {
        console.log('Deactivate acc Response: ' + JSON.stringify(acc));
        return response.json();
      });
  }

  amountdeposit(account_id: string, deposit_bal: boolean ): Observable<any> {
    const url = `${this.accdepositUrl}/${account_id}/deposit`;
    return this.http.put(url, {account_id: account_id, balance: deposit_bal}, {headers: this.headers})
      .map((response: Response) => {
        console.log('Deposit acc Response: ' + JSON.stringify(account_id));
        return response.json();
      });
  }

  amountwithdraw(account_id: string, withdraw_bal: boolean ): Observable<any> {
    const url = `${this.accdepositUrl}/${account_id}/withdraw`;
    return this.http.put(url, {account_id: account_id, balance: withdraw_bal}, {headers: this.headers})
      .map((response: Response) => {
        console.log('Withdraw acc Response: ' + JSON.stringify(account_id));
        return response.json();
      });
  }


  amounttransfer(account_id: string, to_id: string, transfer_bal: boolean ): Observable<any> {
    const url = `${this.accdepositUrl}/${account_id}/transfer`;
    return this.http.put(url, {account_id: account_id, to_id: to_id, balance: transfer_bal}, {headers: this.headers})
      .map((response: Response) => {
        console.log('Withdraw acc Response: ' + JSON.stringify(account_id));
        return response.json();
      });
  }

}
