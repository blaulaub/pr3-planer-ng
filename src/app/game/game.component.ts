import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Game } from '../game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: Game;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private gameService: GameService
  ) { }

  ngOnInit() {
    const gameId = +this.route.snapshot.paramMap.get('gameId');
    this.gameService.getGame(gameId).subscribe(game => this.game = game);
  }

}
