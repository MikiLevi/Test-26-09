import express from 'express';
import beeperRoutes from './routing/beeper.routing';

const app = express();
const port = 3000;

// Middleware לפענוח גופי JSON
app.use(express.json());

// שימוש בנתיבי הביפרים לכל בקשה ל- /beepers
app.use('/api', beeperRoutes);

// הפעלת השרת
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
