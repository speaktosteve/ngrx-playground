import { createAction, props } from '@ngrx/store';
import { IPlayer } from './player.entity';

export const add = createAction('[IPlayer] Add', props<{ player: IPlayer }>());
export const remove = createAction('[IPlayer] Remove', props<{ id: number }>());
export const reset = createAction('[IPlayer] Reset');
