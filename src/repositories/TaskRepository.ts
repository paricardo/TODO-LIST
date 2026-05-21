import type { Task } from '../models/Task.js';


class TaskRepository {

    private tasks: Task[];

    constructor() {
        this.tasks = []
    }

    get(): Task[] {
        return this.tasks;
    }   

    add(data: Task): Task | void {
        this.tasks.push(data);
        return data;
    }

    update(data: Task, position: number){
        this.tasks[position] = data;
    }

    delete(position: number): Task | undefined {
        const result = this.tasks[position];

        delete this.tasks[position];

        return result;
    }
}

export default TaskRepository;