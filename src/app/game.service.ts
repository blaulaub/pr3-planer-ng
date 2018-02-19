import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Game } from './game';
import { GAMES } from './mock-games';

@Injectable()
export class GameService {

  constructor() { }

  getGames(): Observable<Game[]> {
    return of(GAMES);
  }

  addGame(game: Game) {
    // TODO actually game has to persisted via server and id generated there
    game.id = Math.floor(Math.random() * 32000) + 1;
    GAMES.push(game);
  }

  getGame(id: number): Observable<Game> {
    return of(GAMES.find(game => game.id == id));
  }
}
