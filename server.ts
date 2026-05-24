import express from 'express';
import router from './routes.js';
import jwt from 'jsonwebtoken';

const payload = {
    userId: '9ZVBauiKLR9tTB',
    name: "Paulo Ricardo",
}

const secret = 'GjRzvkj3TNEkfw';

const option: jwt.SignOptions = {
    expiresIn: '1h'
}

const token = jwt.sign(payload, secret, option);

try {
    const decoded = jwt.verify(token, 'teste');
    console.log(decoded);
} catch (error: any) {   
    console.log({error: error.message});
}

const server = express();

server.use(express.urlencoded({extended: true}));

server.use(router);

server.listen(3000);