import { add } from './squad.actions';
import { IPlayer } from './player.entity';

export const initialState: IPlayer[] = [];

export function squadReducer(state = initialState, action: any) {
  switch (action.type) {
    case add.type:
      return [...state, action.player];
    default:
      return state;
  }
}
