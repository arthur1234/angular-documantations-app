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
  id?: string;
  title: string;
  text: string;
  code?: string;
  author: string;
  date: any;
  imgURLs?: any;
}
