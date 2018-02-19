import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'cities', component: CitiesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
