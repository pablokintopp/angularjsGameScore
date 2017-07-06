import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { GameComponent } from './game.component';
import { GameService } from './game.service';

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [GameComponent],
  exports : [GameComponent],
  providers : [ GameService ]
})
export class GameModule {


}
