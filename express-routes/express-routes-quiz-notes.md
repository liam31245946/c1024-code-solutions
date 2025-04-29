# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  Post, Get, Put, Delete . The server does not required to implement the http method
- What is Express middleware?
  Express middleware is a function in an Express.js application that has access to the req, res, next

- What is Express middleware useful for?
  Express middleware is useful for enhancing and modularizing the functionality of an Express application

- How do you mount a middleware with an Express application?
  app.use() or app.METHOD()

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  req (Request): Contains information about the client's request, like:

req.method: HTTP method (GET, POST, etc.)
req.url: URL requested by the client.
req.body: Data sent by the client (requires parsing middleware).
res (Response): Used to send a response back to the client, like:

res.send(data): Send a text or HTML response.
res.json(data): Send a JSON response.
res.status(code): Set the status code.
next (Next): Passes control to the next middleware in the chain.

- How do you specify and retrieve route parameters?
  Define parameters in the route path using :parameterName.
  Access parameters by req.params

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
