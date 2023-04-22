import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import router from './routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(router);



export default app;