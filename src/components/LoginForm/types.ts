export type Field = {
  name: string;
  value: any;
};

export interface Props {
  onSubmit: (values: Field[]) => void;
}

export interface ContainerProps {
  authUser: string;
  isAuth: boolean;
  token: string;
  setUser(val: any): void;
}
