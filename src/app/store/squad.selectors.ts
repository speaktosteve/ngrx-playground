import { createSelector } from '@ngrx/store';
import { IPlayer } from './player.entity';

export const selectSquad = (state: { squad: IPlayer[] }) => state;
