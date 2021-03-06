import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe(games => this.games = games);
  }

}
