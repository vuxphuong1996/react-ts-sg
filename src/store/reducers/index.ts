import { IAction } from "./../actions/index";
import { AppEvents } from "./../types/index";

export interface IState {
  age: number;
  name: string;
}

const initialState: IState = {
  age: 1234,
  name: "",
};

export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case AppEvents.SET_AGE:
      return { ...state, age: action.payload };

    case AppEvents.SET_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
