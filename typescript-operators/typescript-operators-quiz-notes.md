# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && check for truthy values in variable. || take alternate actions when variables hold falsy values. use outside of if statement = It provides a way to set default values if the first expression is falsy.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  the evaluation stops as soon as the result is determined
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  handle cases where variables might be null or undefined, providing a reliable way to set default values without the pitfalls of logical OR with falsy values like 0 or
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  use for concise conditional expressions. Allowing you to write less verbose conditional assignments and operations.

- What is the `?.` (optional chaining) operator? When would you use it?
  use to safely access properties on objects that might not exist, preventing runtime error due to undefined or null object property
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  used to clone or merge objects and arrays.
- What data types can be spread into an array? Into an object?
  Array and string
- How does spread syntax differ from rest syntax?
  spread syntax expands the elements of an iterable (like an array or string) or the properties of an object. Rest syntax collects multiple elements into a single variable.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
