import { createStore, combineReducers } from "redux";
import { reducer as appReducer } from "./reducers";

const reducers = combineReducers({
  app: appReducer,
});

export type IAppState = ReturnType<typeof reducers>;
// export type AppDispatch = typeof store.dispatch

export const store = createStore(reducers);
