import { AppEvents } from "../types";

interface ActionType<> {
  type: string;
  payload: number | string;
}

const makeAction = <T, P>(opt: {type: T, payload: P}) => {
  return opt;
};



export const SetName = makeAction<AppEvents.SET_NAME, string>(
  AppEvents.SET_NAME
);
export const SetAge = makeAction<string, number>({ type: AppEvents.SET_AGE, payload: 78 }:);


interface IStringMap<T> {
  [key: string]: T;
}

type IAnyFunction = (...args: any[]) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;

const actions = {
  SetName,
  SetAge,
};

export type IAction = IActionUnion<typeof actions>;
