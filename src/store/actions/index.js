import { GET_DATA } from "../constant";

function action(type, payload = {}) {
  return { type, ...payload };
}

export const getUserList = action(GET_DATA);
