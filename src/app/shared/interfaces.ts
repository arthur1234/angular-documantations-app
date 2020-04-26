export class MenuItems {
  constructor(
    public id: string,
    public names?: any) { }
}

export  class ItemsValues {
  constructor(
    public trigger: string,
    public value1: string
  ) {
  }
}

export interface Post {
  _id?: string;
  title: string;
  text: string;
  code?: string;
  author: string;
  date?: any;
  imgURLs?: any;
}

export interface UserDetails {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  exp: number;
  iat: number;

}

export interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
