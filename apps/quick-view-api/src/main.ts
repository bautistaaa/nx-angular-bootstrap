import { Program } from '@lcmp/quick-view-data';
import * as express from 'express';

const app = express();

const programs: Program[] = [
  {
    title: 'program 1',
  },
  {
    title: 'program 2',
  },
];

app.get('/api/programs', (_, res) => {
  res.send(programs);
});

app.post('/api/programs', (_, res) => {
  programs.push({
    title: `program ${Math.floor(Math.random() * 1000)}`,
  });
  res.send({ programs });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
