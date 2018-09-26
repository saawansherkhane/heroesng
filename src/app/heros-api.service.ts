import { Injectable } from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class HerosApiService {

 constructor(private http: Http, private messageService: MessageService) { }

 private herosUrl = 'http://localhost:3000/heros';  // URL to web api

 getHerosapi (): Observable<any> {
    return this.http.get(this.herosUrl)
      .map((response: Response) => {
        return response.json();
      });
  }

}
