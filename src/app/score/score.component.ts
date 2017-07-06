import { Component} from '@angular/core' ;

import {ScoreService} from './score.service';

@Component({
  moduleId: module.id,
  selector : 'score-list',
  templateUrl : 'score.template.html'
})
export class ScoreComponent{
  scores : Object[] ;

  constructor(scoreService : ScoreService){
      scoreService.getScores().subscribe(data => this.scores = data );

  }
}
