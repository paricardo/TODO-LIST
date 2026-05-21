import type { Task } from '../models/Task.js';
import TaskRepository from '../repositories/TaskRepository.js';

const taskRepository = new TaskRepository();

class TaskService {
    constructor() {

    }

    get(status: string): Task[] {
        const result = taskRepository.get();

        const tasks: Task[] = [];

        result.map((obj) => {
            if (obj.status === status) {
                tasks.push(obj);
            } 
        });

        return tasks;
    }

    getById(id_task: string): Task[] {
        const result = taskRepository.get();

        const tasks: Task[] = [];

        result.map((obj ) => {
            if (obj.id === id_task) {
                tasks.push(obj);
            } 
        });

        return tasks;
    }

    getIndexById(id_task: string): number  {
        const result = taskRepository.get();

        let position: number = 99999;

        result.map((obj, index) => {
            if (obj.id === id_task) {
                position = index;
            }
        })

        return position;
    }

    add(data: Task): Task | void {
        const result = taskRepository.add(data);
        return result;
    }

    update(id_task: string, data: Task): void {
        const position = this.getIndexById(id_task);

        if (position !== 99999) {
            return taskRepository.update(data, position);
        }
    }

    delete(id_task: string): Task | undefined {
        const position = this.getIndexById(id_task);

        if (position !== 99999) {
            const result = taskRepository.delete(position);
            return result;
        } else {
            return undefined;
        }
    }
}

export default TaskService;