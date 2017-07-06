import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GameService{
  private gameUrl= 'http://localhost:8080/SystemGameScores/api/game';

  constructor (private http: Http) {}
  getGames() {
      return this.http.get(this.gameUrl).map(res => res.json());

   }

}
