import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import process, { env } from 'process';

import { errorHandler } from './middlewares/errorHandler.js';
import routes from './routes/index.js';

dotenv.config();

const app = express(); // Declare app
app.use(cors(
  {
    origin: "https://couple-board-web.vercel.app", // Allow your frontend domain
    methods: ["GET", "POST", "OPTIONS"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow required headers
    credentials: true // Allow cookies if needed
  }
));
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
