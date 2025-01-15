import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('homepage');
});
app.get('/note', (req, res) => {
  res.send('notes');
});
app.post('/note/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.send(`Note received ${noteId}`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
