import { GET_DATA } from "../constant";
import { InitialState } from "./interface";

const initialState: InitialState = {
  name: "Phuong",
};

export default function getListUser(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
}
