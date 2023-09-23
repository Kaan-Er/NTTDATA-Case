export interface IUser {
  [x: string]: any;
  name: string;
  loading: boolean;
  error: string;
  token: string;
  language: 'en' | 'tr';
}

export interface LoginProps {
  username: string;
  password: string;
}

export interface LoginResult {
  token: string;
  name: string;
}
