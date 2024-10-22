import express, { Express, Request, Response, NextFunction } from 'express';

const app: Express = express();
const PORT = 8000;

app.use(express.json());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const errCode = err.status || 500;
  const errMessage = err.message || 'Error';

  res.status(errCode).send({
    error: true,
    message: errMessage,
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`[Server] Running : http://localhost:${PORT}`);
});
