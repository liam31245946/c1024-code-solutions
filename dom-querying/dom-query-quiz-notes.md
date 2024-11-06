# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to debug and make sure everything runs normally

- What is a "model"?
  refers to a structured representation of a webpage
- Which "document" is being referred to in the phrase Document Object Model?
  It's referencing the tree-like structure of HTML elements
- What is the word "object" referring to in the phrase Document Object Model?
  refers to each part of the web page—like images, text, or buttons—that can be controlled with code
- What is a DOM Tree?
  a structured layout of all the elements on a web page, organized in a tree-like format
- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementByClassName
  document.getElementById
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.getElementsByClassName("class")
- Why might you want to assign the return value of a DOM query to a variable?
  reuse elements, easy to modify elements
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  allows the browser to load and render the HTML content first before executing any JavaScript
- What does `document.querySelector()` take as its argument and what does it return?
  takes a CSS selector as its argument (such as a class, ID, tag name, or any valid CSS selector) and returns the first matching element it finds in the DOM. If no element matches the selector, it returns null.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  method takes a CSS selector as its argument (like a class, ID, tag name, or any valid CSS selector) and returns a NodeList containing all matching elements in the DOM.

If no elements match the selector, it returns an empty NodeList.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
