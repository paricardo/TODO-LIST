import type { Request, Response } from 'express';
import TaskService from '../services/taskService.js';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';

import { 
    GetSchema, 
    GetByIdSchema, 
    AddSchema,
    UpdateSchema,
    DeleteSchema, 
    UpdateSchemaParams
} from '../schemas/taskSchema.js';

const taskService = new TaskService();

class TaskController {

    constructor() {

    }

    async get(req: Request, res: Response) : Promise<void> {

        try {
            const status = String(req.query.status);
            await GetSchema.validate(req.query);

            const result = taskService.get(status);
            res.json(result);
            res.status(200);
            
        } catch (error) {
            res.json({error: error});
            res.status(401);
        }

    }

   async getById(req: Request, res: Response): Promise<void> {

        const id_task  = String(req.params.id_task);

        try {

            await GetByIdSchema.validate(req.params);

            const result = taskService.getById(id_task);

            res.json(result);

        } catch (error) {
            res.json({error: error});
            res.status(401);
        }

    }

    async add(req: Request, res: Response): Promise<void> {
           
        try {
            await AddSchema.validate(req.body);

            const id = uuidv4();

            req.body.id = id;

            const result = taskService.add(req.body);
            res.json(result);
            res.status(201);

        } catch (error) {
            res.json({error: error});
            res.status(401);

        }

    }

    async update(req: Request, res: Response) : Promise<void> {

       

       try {
            const id_task = String(req.params.id_task);

            await UpdateSchema.validate(req.body);
            await UpdateSchemaParams.validate(id_task);

            const result = taskService.update(id_task ,req.body);
            res.json(result);
            res.status(201);

       } catch (error) {
            res.json({error: error});
            res.status(401);
       }


    }

    async delete(req: Request, res: Response) : Promise<void> {

        try {
            const id_task = String(req.params.id_task);

            await DeleteSchema.validate(req.params);

            const result = taskService.delete(id_task);
          
            res.json(result);
            res.status(200);

        } catch (error) {
            res.json({error: error});
            res.status(401);
        }
            
    }

}

export default TaskController;