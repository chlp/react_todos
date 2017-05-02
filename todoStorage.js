// import Todo from 'todo'

// export default
class TodoStorage {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;

        this.storage = window.localStorage;

        /**
         * Массив Todo'шек
         * @type {Todo[]}
         */
        this.todos = [];

        this.onready = this.onready.bind(this);

        this.load();
    }

    onready(callback) {
        callback();
    }

    save() {
        let arrayToSave = [];
        this.todos.forEach(todo => {
            arrayToSave.push({
                about: todo.about,
                date: todo.date,
                done: todo.done
            });
        });
        this.storage.todos = JSON.stringify(arrayToSave);
    }

    load() {
        this.todos = [];
        try {
            JSON.parse(this.storage.todos).forEach((obj) => {
                this.todos.push(new Todo(obj));
            });
        } catch (ex) {
            console.log('new todos list');
            this.sync();
        }
        console.log('loaded ' + this.todos.length + ' todos');
    }

    add(todo) {
        this.todos.push(todo);
        this.sync();
    }

    remove(deletedTodo) {
        let found = false;
        this.todos.forEach((todo, index) => {
            if (!found && todo.guid === deletedTodo.guid) {
                this.todos.splice(index, 1);
                found = true;
            }
        });
        this.sync();
    }

    sync() {
        var newTodosStr = JSON.stringify(this.todos);
        if (newTodosStr !== this.storage.todos) {
            this.save();
            this.eventEmitter.emit('Todos.update', this.todos);
        }
    }
}