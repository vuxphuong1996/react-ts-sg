import { AppEvents } from "../types";

export interface IAction {
  type: AppEvents;
  payload?: string | number | object;
}

const makeAction = <T extends AppEvents, P>(type: T, payload: P) => {
  console.log(payload)
  return {
    type,
    payload
  }
}
// const makeAction = (opt: IAction) => {
//   return opt;
// };

// const SetAge = (opt: IAction) => {
//   return { type: AppEvents.SET_AGE, payload: 78 };
// };

export const SetAge = makeAction<AppEvents.SET_AGE, number>( AppEvents.SET_AGE, 68);


// function action(type, payload = {}) {
//   return {type, ...payload}
// }

// export const user = {
//   request: login => action(USER[REQUEST], {login}),
//   success: (login, response) => action(USER[SUCCESS], {login, response}),
//   failure: (login, error) => action(USER[FAILURE], {login, error}),
// }
