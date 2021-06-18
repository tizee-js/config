import type { User, Book } from './types';

const user1: User = {
  nickname: 'foo',
};

const book1: Book = {
  name: 'foo',
  author: user1,
};

console.log(book1);
