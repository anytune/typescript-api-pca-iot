import 'reflect-metadata';
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import './database/connect';
import routes from './routes';

dotenv.config();
const PORT = process.env.PORT || 8091;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log('Servidor iniciado na porta ' + PORT));