import express from 'express';
import beeperRoutes from './routing/beeper.routing';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/beepers', beeperRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
