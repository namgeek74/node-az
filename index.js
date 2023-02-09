import express from 'express';
import __dirname from './dirname.js';
import sampleMethodsRoute from './routes/sampleMethods.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/assets'));
app.use(express.json());

app.use('/sample-all-method', sampleMethodsRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
