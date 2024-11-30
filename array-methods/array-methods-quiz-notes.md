# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:

  - What does `Array.forEach` do?
    it executes a provided function once for each array element

  - What should the callback function do?
    it returns undefined and is not chainable.

  - What is `Array.forEach` useful for?
    it use to execute side effect( logging, updating UI, modifying values) for every element in the array without returning new array

- `Array.map`:

  - What does `Array.map` do?
    it creating a new array by applying specific function to each element. It does not modify the original array and instead returns a new array containing the results of the transformation

  - What should the callback function return?
    constructs a new array from the result

  - What is `Array.map` useful for?
    it useful for transforming data

- `Array.find`:

  - What does `Array.find` do?
    search an array and return the first element that satisfied the condition

  - What should the callback function return?
    executes the callback function once for each index of the array until it finds one where callback returns a truthy value

  - What is `Array.find` useful for?
    finding an object by a property

- `Array.filter`:

  - What does `Array.filter` do?
    create a new array containing all element of the original array that satisfy the condition

  - What should the callback function return?
    constructs a new array of all the values for which callback returns a value that coerces to true

  - What is `Array.filter` useful for?
    It is commonly used to filter data, remove unwanted elements, and create subsets of arrays without modifying the original array

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
