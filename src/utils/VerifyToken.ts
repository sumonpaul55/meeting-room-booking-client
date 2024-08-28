import { jwtDecode } from "jwt-decode";

export const verifiyToken = (token: string) => {
  return jwtDecode(token);
};
