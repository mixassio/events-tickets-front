export interface Props {
  authUser: string;
  isAuth: boolean;
  token: string;
  setUser(val: any): void;
}

export interface State {
  authUser: string;
  isAuth: boolean;
  token: string;
}