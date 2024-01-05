import { Component } from '@angular/core';
import { IPlayer } from '../store/player.entity';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from '../player/player.component';
import { PickerService } from '../services/picker.service';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss',
})
export class PlayerListComponent {
  players!: IPlayer[];
  constructor(private pickerService: PickerService) {
    this.players = pickerService.players;
  }

  pickPlayer(player: IPlayer) {
    this.pickerService.pickPlayer(player);
  }
  unPickPlayer(player: IPlayer) {
    this.pickerService.unPickPlayer(player);
  }
}
