import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PlayerService{
  private playerUrl= 'http://localhost:8080/SystemGameScores/api/person';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor (private http: Http) {}
  getPlayers() {
      return this.http.get(this.playerUrl).map(res => res.json());

   }

  postPlayer(name: string, email:string , password: string) {
      var person = {name: name, email: email, password: password};
       return this.http.post(this.playerUrl,JSON.stringify(person),{headers: this.headers}).map(res => res.json());

    }

}
