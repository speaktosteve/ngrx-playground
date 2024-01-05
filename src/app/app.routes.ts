import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PickedPlayersComponent } from './picked-players/picked-players.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, title: 'Home' },
  { path: 'player-list', component: PlayerListComponent, title: 'Player List' },
  {
    path: 'picked-players',
    component: PickedPlayersComponent,
    title: 'Picked Players',
  },
];
