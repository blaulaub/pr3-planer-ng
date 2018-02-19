import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { CitiesComponent } from './cities/cities.component';
import { GamesComponent } from './games/games.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GameComponent } from './game/game.component';
import { NewCityComponent } from './new-city/new-city.component';

import { GoodService } from './services/good.service';
import { CityService } from './services/city.service';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CitiesComponent,
    GamesComponent,
    NewGameComponent,
    GameComponent,
    NewCityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    GoodService,
    CityService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
