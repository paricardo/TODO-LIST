import { Router } from 'express';
import type { NextFunction, Response, Request } from 'express';
import TaskController from './src/controllers/TaskController.js';
import storage from './src/utils/storage.js';
import multer from 'multer';

const taskController = new TaskController();

const router = Router();

const upload = multer({storage});

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
        //Fazer verificações

        next();
    } else {
        res.json({error: "Usuário não autenticado!"});
        res.status(401);
    }
}

router.get('/task' ,taskController.get);
router.get('/task/:id_task', taskController.getById);
router.post('/task', upload.single('file') ,taskController.add);
router.put('/task/:id_task', taskController.update);
router.delete('/task/:id_task', taskController.delete);

export default router;