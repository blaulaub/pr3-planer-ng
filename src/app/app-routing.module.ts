import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'game/:gameId', component: GameComponent },
  { path: 'game/:gameId/cities', component: CitiesComponent },
  { path: 'game/:gameId/city/:cityId', component: CityComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
