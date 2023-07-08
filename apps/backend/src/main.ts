import { DatabaseConnection } from './db';
import express from 'express';
import cors from 'cors';

// initialize database before actually starting express server
DatabaseConnection.initialize()
  .then(() => {
    const host = process.env.HOST ?? 'localhost';
    const port = process.env.PORT ? Number(process.env.PORT) : 3000;

    const app = express();
    app.use(cors('*'));

    app.get('/', (req, res) => {
      res.send({ message: 'Hello World' });
    });

    app.listen(port, host, () => {
      console.log(`[ ready ] http://${host}:${port}`);
    });
  })
  .catch((error) => console.error(error));
