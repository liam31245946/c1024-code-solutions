# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  when it has been rendered the first time
- What is a React Effect?
  useEffect. allow to fetching data from api
- When should you use an Effect and when should you not use an Effect?
  use when you need to perform side effects,
- When do Effects run?
  after the component renders
- What function is used to declare an Effect?
  useEffect()
- What are Effect dependencies and how do you declare them?
  The dependencies are passed as the second parameter to useEffect in the form of an array

useEffect(() => {
// Effect code here
}, [dependency1, dependency2, ...]);

- Why would you want to clean up from an Effect?
  avoid duplicate side effect
- How do you clean up from an Effect?
  you return a function from the useEffect callback:

- When does the cleanup function run?
  Before the Effect Runs Again (on Dependency Change)

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
