import React from 'react';
import { Accordion } from './Accordion';
import './App.css';

const topics = [
  {
    id: 1,
    title: 'Hypertext Markup Language',
    content:
      'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
  },
  {
    id: 2,
    title: 'Cascading Style Sheets',
    content:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
  },
  {
    id: 3,
    title: 'JavaScript',
    content:
      'JavaScript (JS) is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is used to make web pages interactive and dynamic.',
  },
];

export default function App() {
  return (
    <div className="App">
      <Accordion items={topics} />
    </div>
  );
}
