import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ScoreService{
  private scoreUrl= 'http://localhost:8080/SystemGameScores/api/score';

  constructor (private http: Http) {}
  getScores() {
      return this.http.get(this.scoreUrl).map(res => res.json());

   }

}
