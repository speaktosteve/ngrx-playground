import { Component } from '@angular/core';
import { PickerService } from '../services/picker.service';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { IPlayer } from '../store/player.entity';
import { selectSquad } from '../store/squad.selectors';

@Component({
  selector: 'app-picked-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picked-players.component.html',
  styleUrl: './picked-players.component.scss',
})
export class PickedPlayersComponent {
  squad: IPlayer[] = [];

  constructor(
    private pickerService: PickerService,
    private store: Store<{ squad: any }>
  ) {
    this.store.pipe(select(selectSquad)).subscribe((squad) => {
      this.squad = squad.squad;
    });
  }

  addPlayer() {
    const newPlayer: IPlayer = {
      id: 20,
      name: 'Player 20',
    };
    this.pickerService.pickPlayer(newPlayer);
  }
}
