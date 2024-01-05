import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerListComponent } from '../player-list/player-list.component';
import { PickedPlayersComponent } from '../picked-players/picked-players.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, PlayerListComponent, PickedPlayersComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
