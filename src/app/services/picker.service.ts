import { Injectable } from '@angular/core';
import { IPlayer } from '../store/player.entity';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, remove } from '../store/squad.actions';
import { selectSquad } from '../store/squad.selectors';

@Injectable({
  providedIn: 'root',
})
export class PickerService {
  players: IPlayer[] = [
    { id: 1, name: 'Player 1' },
    { id: 2, name: 'Player 2' },
    { id: 3, name: 'Player 3' },
    { id: 4, name: 'Player 4' },
    { id: 5, name: 'Player 5' },
    { id: 6, name: 'Player 6' },
    { id: 7, name: 'Player 7' },
    { id: 8, name: 'Player 8' },
    { id: 9, name: 'Player 9' },
  ];
  private squad: IPlayer[] = [];

  constructor(private store: Store<{ squad: IPlayer[] }>) {
    this.store.pipe(select(selectSquad)).subscribe((squad) => {
      this.squad = squad.squad;
    });
  }

  getSquad() {
    return this.squad;
    // this.squad$ = this.store.select(selectAllPlayers);
  }

  pickPlayer(player: IPlayer) {
    // this.pickedPlayers.push(player);
    this.store.dispatch(add({ player }));
  }

  unPickPlayer(player: IPlayer) {
    this.store.dispatch(remove({ id: player.id }));

    // this.pickedPlayers = this.pickedPlayers.filter(
    //   (pickedPlayer) => pickedPlayer.id !== player.id
    // );
  }
}
