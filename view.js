
function renderTasks(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        console.log('View:'+ task)
        const taskRender = this.getTaskRender(task.category);
        taskRender.render(task);
    });
}

class TaskRender {
    render(task) {
        throw new Error("Désolé! il y a un problème. Veuillez essayer ultérieurement");
    }
}

class WorkTaskRender extends TaskRender {
    render(task) {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');
        taskItem.textContent = task.task;
        taskItem.style.color = 'red';//rouge pour les tâches Travail
        taskItem.classList.add("list-group-item", "list-group-item-danger");
        taskList.appendChild(taskItem);
    }
}

class HomeTaskRender extends TaskRender {
    render(task) {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');
        taskItem.textContent = task.task;
        taskItem.style.color = 'blue'; // Bleu pour les tâches Maison
        taskItem.classList.add("list-group-item", "list-group-item-primary");
        taskList.appendChild(taskItem);
    }
}

class diverseTaskRender extends TaskRender {
    render(task) {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');
        taskItem.textContent = task.task;
        taskItem.style.color = 'green'; // Vert pour les tâches diverses
        taskItem.classList.add("list-group-item", "list-group-item-info");
        taskList.appendChild(taskItem);
    }
}

function getTaskRender(category) {
    switch (category) {
        case 'work':
            return new WorkTaskRender();
        case 'home':
            return new HomeTaskRender();
        case 'miscellaneous':
            return new diverseTaskRender();
        default:
            console.log(category)
            throw new Error(`Catégorie inconnue!`);
    }
}

