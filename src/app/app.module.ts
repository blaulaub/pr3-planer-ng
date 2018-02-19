import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { CitiesComponent } from './cities/cities.component';
import { GamesComponent } from './games/games.component';
import { NewGameComponent } from './new-game/new-game.component';

import { CityService } from './city.service';
import { GameService } from './game.service';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CitiesComponent,
    GamesComponent,
    NewGameComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CityService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
