import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { ScoreComponent } from './score.component';
import { ScoreService } from './score.service';

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [ScoreComponent],
  exports : [ScoreComponent],
  providers : [ ScoreService ]
})
export class ScoreModule {


}
