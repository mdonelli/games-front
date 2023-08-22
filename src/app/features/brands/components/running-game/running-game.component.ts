import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Game} from "../../../../core/models/game";

@Component({
  selector: 'app-running-game',
  templateUrl: './running-game.component.html',
  styleUrls: ['./running-game.component.css']
})
export class RunningGameComponent {
  @Input() game!: Game;
  @Output() stopPlayingEvent =  new EventEmitter<string>();

  stopPlaying() {
    this.stopPlayingEvent.emit();
  }
}
