# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  The pg NPM package is used to interact with PostgreSQL databases in Node.js applications. It helps you connect to the database, send SQL queries, and get the results. It makes working with PostgreSQL databases easier in JavaScript.

- How do you tell `pg` which database to connect to?
  by providing a connection string or connection configuration when creating a client or poo

- How do you send SQL to PostgreSQL from your Express server?
  How do you send SQL to PostgreSQL from your Express server?

- How do you access the rows that get returned from the SQL query?
  To access the rows returned from a SQL query in pg, you use the rows property of the query result object

- What must you always remember to put around your asynchronous route handlers? Why?
  to put error-handling mechanisms around your asynchronous route handlers.

- What is a SQL Injection Attack and how do you avoid it in `pg`?
  A SQL Injection Attack happens when an attacker inserts malicious SQL code into a query, exploiting vulnerabilities in user input handling. To avoid SQL Injection is by using parameterized queries or prepared statements, which separate SQL code from user inputs.

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
