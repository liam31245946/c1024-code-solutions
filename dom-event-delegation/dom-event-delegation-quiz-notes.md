# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  a property that represents the element that triggered an event
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  it works because of event bubbling: when an event happens on a child element, it "bubbles up" to its parent elements.
- What DOM element property tells you what type of element it is?
  the tagName property
- What does the `element.closest()` method take as its argument and what does it return?
  The element.closest() method takes a CSS selector string as its argument and returns the closest ancestor element
- How can you remove an element from the DOM?
  by using the remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  use event.target()

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
