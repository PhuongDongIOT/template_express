import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();

config();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Server started...');
});

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});