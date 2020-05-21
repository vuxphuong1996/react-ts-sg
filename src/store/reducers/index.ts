import { IAction } from "./../actions/index";
import { AppEvents } from "./../types/index";

const initialState: IState = {
  age: 1234,
  name: "",
};

export interface IState {
  age: number;
  name: string;
}

export const reducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case AppEvents.SET_NAME:
      return { ...state, name: action.payload };

    case AppEvents.SET_AGE:
      return { ...state, age: action.payload };
    default:
      return state;
  }
};
