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
    GAMES.push(game);
  }
}
