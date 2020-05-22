import { AppEvents } from "../types";

const makeAction = <T extends AppEvents, P>(type: T) => (payload: P) => {
  return {
    type,
    payload,
  };
};

export const SetName = makeAction<AppEvents.SET_NAME, string>(
  AppEvents.SET_NAME
);

export const SetAge = makeAction<AppEvents.SET_AGE, number>(AppEvents.SET_AGE);

interface IStringMap<T> {
  [key: string]: T;
}
type IAnyFunction = (...args: any[]) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;

const actions = {
  SetAge,
  SetName,
};
//get type for argument action of reducer
export type IAction = IActionUnion<typeof actions>;
