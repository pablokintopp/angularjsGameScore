import { Routes } from '@angular/router';

import { GameRoutes } from './game/index';

import { PlayerRoutes } from './player/index';

import { ScoreRoutes } from './score/index';

export const ROUTES : Routes = [
...GameRoutes,
...PlayerRoutes,
...ScoreRoutes
/*{
  path:'component 2',
  component: 'Component2'
}*/

];
