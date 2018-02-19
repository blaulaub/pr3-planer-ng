import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { CitiesComponent } from './cities/cities.component';
import { GamesComponent } from './games/games.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GameComponent } from './game/game.component';
import { NewCityComponent } from './new-city/new-city.component';
import { GoodsComponent } from './goods/goods.component';
import { ShipTypesComponent } from './ship-types/ship-types.component';

import { GoodService } from './services/good.service';
import { CityService } from './services/city.service';
import { GameService } from './services/game.service';
import { ShipTypeService } from './services/ship-type.service';
import { FacilityService } from './services/facility.service';
import { FacilitiesComponent } from './facilities/facilities.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CitiesComponent,
    GamesComponent,
    NewGameComponent,
    GameComponent,
    NewCityComponent,
    GoodsComponent,
    ShipTypesComponent,
    FacilitiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    GoodService,
    CityService,
    GameService,
    ShipTypeService,
    FacilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
