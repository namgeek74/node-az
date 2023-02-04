import express from 'express';

const sampleMethodsRoute = express.Router();

sampleMethodsRoute.get('/get', (req, res) => {
  res.json({ name: 'Nam', year_of_birth: 1996 });
});

sampleMethodsRoute.get('/get-error', (req, res) => {
  res.status(500).json({ error: 'Unexpected error' });
});

sampleMethodsRoute.get('/get-path-var/:id', (req, res) => {
  const id = req.params.id;
  res.json({ id: id });
});

sampleMethodsRoute.get('/get-query-var', (req, res) => {
  const name = req.query.name;
  res.json({ name: name });
});

sampleMethodsRoute.post('/post', (req, res) => {
  console.log(req.body);
  const body = req.body;
  res.json(body);
});

sampleMethodsRoute.put('/put', (req, res) => {
  res.send('PUT request');
});

sampleMethodsRoute.delete('/delete', (req, res) => {
  res.send('DELETE request');
});

sampleMethodsRoute.patch('/patch', (req, res) => {
  res.send('PATCH request');
});

export default sampleMethodsRoute;
