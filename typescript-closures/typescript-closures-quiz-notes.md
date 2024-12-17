# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  scope is determined at compile time

- What allows JavaScript functions to "remember" variables from their surroundings?
  A closure lets a function "remember" the variables from where it was created

- What values does a closure contain?
  the function itself. The variables from the place where the function was created.
- When is a closure created?
  A closure is created when a function is defined inside another function and references variables from the outer function's scope.

- How can you tell if a function will be created with a closure?
  A function is defined inside another function.
  The inner function references variables from the outer function's scope.

- In React, what is one important case where you need to know if a closure was created?
  when dealing with state updates inside event handlers, effects, or callbacks.

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
