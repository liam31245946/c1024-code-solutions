# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  use fetch() function

- What two things need to be done to properly handle HTTP request errors? Why?
  Check the HTTP response status: fetch
  use catch block

- How can `useEffect` be used to load data for a component?
  by triggering a data-fetching function when the component mounts or when certain dependencies change.

- How do you use `useEffect` to load component data just once when the component mounts?
  provide an empty dependency array ([]) as the second argument to useEffect

- How do you use `useEffect` to load component data every time the data key changes?
  include that value as a dependency in the useEffect dependency array. This ensures the effect runs every time dataKey changes.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  In a large-scale production app, what are some better alternatives for loading and managing backend data?

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
