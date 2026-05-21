import express from 'express';
import router from './routes.js';

const server = express();

server.use(express.urlencoded({extended: true}));

server.use(router);

server.listen(3000);