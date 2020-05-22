import { createStore, combineReducers } from "redux";
import { reducer as appReducer, IState } from "./reducers";

export interface IAppState {
  app: IState;
}

const reducers = combineReducers<IAppState>({
  app: appReducer,
});

export const store = createStore(reducers);
