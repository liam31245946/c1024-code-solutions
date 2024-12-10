# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  use to controlling state in React
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  must start with use, only call by react or other hooks. Must be call on the top level
- What is the purpose of state in React?
  it use to store data that can change
- Why can't we just maintain state in a local variable?
  local variables don't trigger a component re-render when they change
- What two actions happen when you call a `state setter` function?
  state update: new value will replace old . Re-render: UI will reflex new state
- When does the local `state variable` get updated with the new value?
  it get update after the component re-render.

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
