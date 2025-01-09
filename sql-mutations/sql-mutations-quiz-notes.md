# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  create, read , update , delete

- How do you add a row to a SQL table?
  by using "insert into"

- How do you add multiple rows to a SQL table at once?
  Adds multiple rows to the table in one query.

- How do you update rows in a database table?
  Use the UPDATE statement with the SET clause to modify rows.

- How do you delete rows from a database table?
  Use the DELETE statement with the WHERE clause to remove rows.

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  Without WHERE, all rows in the table will be updated or deleted.

- How do you accidentally delete or update all rows in a table?
  Forgetting to include a WHERE clause.

- How do you get back the modified row without a separate `select` statement?
  Use the RETURNING clause in your INSERT, UPDATE, or DELETE statement to retrieve the modified row directly.

- Why did you get an error when trying to delete certain films?
  The film is linked to other tables, Deleting the film would break these links, which the database prevents.

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
