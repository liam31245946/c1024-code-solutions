# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To debug and find error
- What is the purpose of events and event handling?
  a web page interactive and responsive to user actions
- Are all possible parameters required to use a JavaScript method or function?
  no. Many functions have optional parameters or default values.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()
- What is a callback function?
  a function passed as an argument to another function at a specific time or after a specific event occurs
- What object is passed into an event listener callback when the event fires?
  When an event fires, an event object is automatically passed into the event listener’s callback function

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  the element that triggered the event
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

1.  It will only run when the event (click) actually happens.
2.  the function runs as soon as this line of code is executed

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
