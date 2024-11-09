interface Book {
  isbn: string;
  title: string;
  author: string;
}

const book: Book[] = [
  {
    isbn: '123',
    title: 'Silent Patient ',
    author: ' Alex Michaelides',
  },
  {
    isbn: '986',
    title: 'The Guest List',
    author: ' Lucy Foley',
  },
  {
    isbn: '456',
    title: 'The Midnight Library ',
    author: ' Matt Haig',
  },
];

const bookJason = JSON.stringify(book);
console.log('bookJason', bookJason);
console.log('typeof bookJson', typeof bookJason);

interface student {
  name: string;
  id: string;
}
const studentInfo: student = {
  name: 'Liam',
  id: '123456',
};

const studentJason = JSON.stringify(studentInfo);

console.log(studentJason);
console.log('typeof', typeof studentJason);

const obj = JSON.parse(studentJason);
console.log('typeof parse()', typeof obj);
