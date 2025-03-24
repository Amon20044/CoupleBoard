import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import process from 'process';

import { errorHandler } from './middlewares/errorHandler.js';
import routes from './routes/index.js';

dotenv.config();

const app = express(); // Declare app
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(" Hello Fam, I am Amon and this is API for my project!");
});

app.use('/api', routes);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));

export default app;
