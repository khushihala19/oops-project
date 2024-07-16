class Task {
    constructor(description) {
        this.description = description;
        this.complete = false;
    }

    toggleComplete() {
        this.complete = !this.complete;
    }
}

class TodoList {
    constructor() {
        this.tasks = [];
        this.taskListElement = document.getElementById('task-list');
    }

    addTask(task) {
        this.tasks.push(task);
        this.render();
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        this.render();
    }

    toggleTaskComplete(index) {
        this.tasks[index].toggleComplete();
        this.render();
    }

    render() {
        this.taskListElement.innerHTML = '';
        this.tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.description;
            if (task.complete) {
                taskItem.classList.add('complete');
            }
            taskItem.addEventListener('click', () => this.toggleTaskComplete(index));
            taskItem.addEventListener('dblclick', () => this.removeTask(index));
            this.taskListElement.appendChild(taskItem);
        });
    }
}

document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskDescription = taskInput.value.trim();
    if (taskDescription === '') {
        alert('Task description cannot be empty.');
        return;
    }
    const task = new Task(taskDescription);
    todoList.addTask(task);
    taskInput.value = '';
});

const todoList = new TodoList();
