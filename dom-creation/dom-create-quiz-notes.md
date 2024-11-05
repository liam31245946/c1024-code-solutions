# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  No, the document.createElement() method creates a new element but does not automatically insert it into the page
- How do you add an element as a child to another element?
  use the appendChild() method on the parent elements
- What do you pass as the arguments to the `element.setAttribute()` method?
  attribute's name and attribute's value
- What steps do you need to take in order to insert a new element into the page?
  Create the new element using document.createElement().
  Set attributes or content (like textContent or setAttribute) for the new element if needed.
  Select the parent element where you want to insert the new element.
  Append the new element to the parent using appendChild() (or another method like insertBefore() if you want a specific position).
- What is the `textContent` property of an element object for?
  used to get or set the text inside an element. It handles only the text content, ignoring any HTML tags.
- Name two ways to set the `class` attribute of a DOM element.
  Using setAttribute()
  Using the className property
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  reusability, and easy to update

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
