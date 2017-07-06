import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { PlayerComponent } from './player.component';
import { PlayerService } from './player.service';

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [PlayerComponent],
  exports : [PlayerComponent],
  providers : [ PlayerService ]
})
export class PlayerModule {


}
