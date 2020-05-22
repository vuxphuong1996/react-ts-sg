import { combineReducers } from 'redux';
import { appReducer, IState } from './appReducer';
export interface IAppState {
  app: IState;
}

export const rootReducers = combineReducers<IAppState>({
  app: appReducer
});
