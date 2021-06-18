export interface User {
  nickname: string;
}

export interface Book {
  name: string;
  author: User | User[];
}
