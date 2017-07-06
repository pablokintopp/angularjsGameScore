import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <nav class="navbar navbar-default sidebar" role="navigation">
      <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a href="#" routerLink="/">Home<span style="font-size:16px;" class="pull-right hidden-xs showopacity glyphicon glyphicon-home"></span></a></li>
          <li> <a href="#" routerLink="/game">{{games}} <span style="font-size:16px;" class="pull-right hidden-xs showopacity glyphicon glyphicon-knight"></span></a> </li>
          <li ><a href="#" routerLink="/player">{{players}}<span style="font-size:16px;" class="pull-right hidden-xs showopacity glyphicon glyphicon-user"></span></a></li>
          <li ><a href="#" routerLink="/score">{{scores}}<span style="font-size:16px;" class="pull-right hidden-xs showopacity glyphicon glyphicon-list"></span></a></li>
        </ul>
      </div>
      </div>
</nav>
      <router-outlet></router-outlet>
     `
  ,
})
export class AppComponent  {
   games = 'Games';
   players = 'Jogadores';
   scores = 'Scores';
 }
