class TaskModel {
    constructor() {
        if (TaskModel.instance) {
            return TaskModel.instance;
        }
        TaskModel.instance = this;
        this.tasks = [];
    }

    /*addTask(task) {
        this.tasks.push(task);
        console.log('model base')
    }*/
    addTask({task, category}) {
        console.log('model avancé')
        this.tasks.push({ task, category });
    }
}

const taskModel = new TaskModel();
Object.freeze(taskModel);

class AdvancedTaskModel extends TaskModel {
    constructor() {
        super();
    }
}

const advancedModel = new AdvancedTaskModel();
