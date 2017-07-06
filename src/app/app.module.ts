import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { GameModule } from './game/game.module';
import { PlayerModule } from './player/player.module';
import { ScoreModule } from './score/score.module';
import { AppComponent }  from './app.component';
import {ROUTES} from './app.routes';

@NgModule({

  imports:      [ BrowserModule, RouterModule.forRoot(ROUTES),HttpModule , GameModule,PlayerModule ,ScoreModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
