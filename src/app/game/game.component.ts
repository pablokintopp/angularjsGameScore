import { Component} from '@angular/core' ;

import {GameService} from './game.service';

@Component({
  moduleId: module.id,
  selector : 'game-list',
  templateUrl : 'game.template.html'
})
export class GameComponent{
  games : Object[] ;

  constructor(gameService : GameService){
      gameService.getGames().subscribe(data => this.games = data );

  }
}
