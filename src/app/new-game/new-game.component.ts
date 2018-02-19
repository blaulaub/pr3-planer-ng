import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  game: Game;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.resetGame();
  }

  resetGame(): Game {
    var previous: Game = this.game;
    this.game = { id: null, name: "" };
    return previous;
  }

  addGame() {
    this.gameService.addGame(this.resetGame());
  }
}
