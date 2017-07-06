import { Component} from '@angular/core' ;

import {PlayerService} from './player.service';

@Component({
  moduleId: module.id,
  selector : 'player-list',
  templateUrl : 'player.template.html'
})
export class PlayerComponent{
  players : Object[] ;
  playerService: PlayerService;

  constructor(playerService : PlayerService){
    this.playerService = playerService;
      playerService.getPlayers().subscribe(data => this.players = data );

  }
  save(name: string, email:string , password: string): void {
     this.playerService.postPlayer(name, email , password).subscribe(data => console.log(data));
  }
}
