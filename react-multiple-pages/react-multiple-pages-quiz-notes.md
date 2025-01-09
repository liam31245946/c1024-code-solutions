# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How does the browser URL change when navigating through a Single Page App? How does a user expect the URL to change as they navigate through a browser app?
  The URL changes dynamically without reloading the page. JavaScript updates the URL using the browser's History.
  Users expect the URL to reflect their current location in the app

- What NPM package can be used to make navigating a React app behave as users expect?
  React Router

- Which React Router component(s) can be used to set up your app's navigation?
  BrowserRouter, Routes, Route, Link, and NavLink

- How does React Router match the browser URL to one of your app's React components?
  using the Route component and its path property

- What is the purpose of React Router's `Outlet` component?
  serve as a placeholder for rendering child routes in a parent route

- What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?
  The useParams hook is used to get dynamic route segments

- What React Router hook is used to navigate programmatically?
  the useNavigate hook is used to navigate programmatically in React Router.

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
