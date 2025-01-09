# ds-bst-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Binary Search Tree data structure.
  a data structure that holds its data in a tree

- What are some examples of when you would use a Binary Search Tree?
  searching for data, Sorting Dynamic Data

- How do you determine if an element is in a Binary Search Tree? What is its time complexity?
  start at the root, comparing the element with the current node, repeat until the element is founded

- How do you add an element into a Binary Search Tree? What is its time complexity?
  comparing it with the root, if it smaller , move to the left child. larger, move to the right child.

- How do you remove an element from a Binary Search Tree? What is its time complexity?
  case 1: node has no children: Simply remove the node by setting its parent's reference to null.
  case 2 : node has one child: Replace the node with its single child (either left or right).
  case 3: node has 2 child:

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
