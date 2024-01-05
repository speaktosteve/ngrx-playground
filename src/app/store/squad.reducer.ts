import { add, remove } from './squad.actions';
import { IPlayer } from './player.entity';

export const initialState: IPlayer[] = [];

export function squadReducer(state = initialState, action: any) {
  switch (action.type) {
    case add.type:
      return [...state, action.player];
    case remove.type:
      const updatedState = state.filter(
        (pickedPlayer) => pickedPlayer.id !== action.id
      );
      return updatedState;
    default:
      return state;
  }
}
