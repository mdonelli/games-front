import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Game} from "../../../../core/models/game";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-games-container',
  templateUrl: './games-container.component.html',
  styleUrls: ['./games-container.component.css']
})
export class GamesContainerComponent {
  @Input() categoryFilter: string | null = null;
  @Input() providerFilter: string | null = null;
  @Input() games: Game[] = [];
  @Output() gameLaunchEvent = new EventEmitter<Game>();
  imageUrl: string = environment.gameImageUrl;
  imageExtension: string = environment.gameImageExtension;

  launchGame(value: Game) {
    this.gameLaunchEvent.emit(value);
  }
}
