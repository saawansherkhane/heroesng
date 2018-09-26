import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
// import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BranchesApiService {

  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {
  }

  branchcreate(name: string): Observable<any[]> {
    return this.http.post("http://localhost:3000/api/v1/branches/create", {name: name},  {headers: this.headers})
      .map((response: Response) => {
        return response.json();
      });
  }

  listbranches(): Observable<any[]> {
    return this.http.get('http://localhost:3000/api/v1/branches/branch', {headers: this.headers})
      .map((response: Response) => {
        return response.json();
      });
  }

}
