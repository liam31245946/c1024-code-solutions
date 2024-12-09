# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  asyn marks a function as asynchronous, make it return a promise. await paused the execution of the function until Promise resolves or rejects
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  code is easier to read
- When do you use `async`?
  for functions that include operations like fetching data, reading files, or performing tasks that take time to complete.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  use await to paused the function and wait for return. Avoid await for functions that don't return a Promise. the synchronous function will run immediately.
- How do you handle errors with `await`?
  by using try/catch block. with this you can catch and handle error.
- What do `try`, `catch` and `throw` do? When do you use them?
  try test for error. Catch handle the error. throw can manually raise an error
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  The Promise starts executing but is not paused or waited for. Instead, it returns a Promise object immediately to the caller.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await because of the try and catch. it just make sense

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
