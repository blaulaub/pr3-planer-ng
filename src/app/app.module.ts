import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { CitiesComponent } from './cities/cities.component';

import { CityService } from './city.service';
import { AppRoutingModule } from './/app-routing.module';
import { GamesComponent } from './games/games.component';
import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CitiesComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CityService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
