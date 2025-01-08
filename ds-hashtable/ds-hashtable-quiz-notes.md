# ds-hashtable-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Hash Table data structure.
  data structure that stores data as key/value pairs

- What are some examples of when you would use a Hash Table?
  contact list search, auto-complete for search engine.

- How do you read a key's value in a Hash Table? What is its time complexity?
  Use the index to find the bucket where the key-value pair is stored. constant time

- How do you add a key/value into a Hash Table? What is its time complexity?
  Hash the Key: A hash function gives an index for the key.
  Go to the Index: Use the index to find the right spot.
  Insert the Pair: Place the key and value in that spot. If there's already something there (collision), handle it by chaining or other methods.

- How do you update a key's value in a Hash Table? What is its time complexity?
  Hash the Key: Use the hash function to find the index for the key.
  Find the Key: Go to the bucket at that index and locate the key.
  Update the Value: Replace the old value with the new one.

- How do you remove a key/value from a Hash Table? What is its time complexity?
  Hash the Key: Use the hash function to find the index for the key.
  Find the Key: Go to the bucket at that index and locate the key.
  Remove the Key/Value:
  If the bucket contains only this pair, clear it.
  If there are multiple pairs (collision), remove the specific key/value pair while keeping others intact.

linear run time

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
