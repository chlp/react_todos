import Todo from './todo';

export default class TodoStorage {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;

        this.storage = window.localStorage;

        /**
         * Массив Todo'шек
         * @type {Todo[]}
         */
        this.todos = [];

        TodoStorage.onready = TodoStorage.onready.bind(this);

        this.load();
    }

    static onready(callback) {
        callback();
    }

    toJson() {
        let arrayToSave = [];
        this.todos.forEach(todo => {
            arrayToSave.push({
                about: todo.about,
                date: todo.date,
                done: todo.done
            });
        });
        return JSON.stringify(arrayToSave);
    }

    save() {
        this.storage.todos = this.toJson();
    }

    load() {
        this.todos = [];
        try {
            JSON.parse(this.storage.todos).forEach(obj => {
                this.todos.push(new Todo(obj, this));
            });
        } catch (ex) {
            this.sync();
        }
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
        let newTodosStr = this.toJson();
        if (newTodosStr !== this.storage.todos) {
            this.save();
            this.eventEmitter.emit('Todos.update', this.todos);
        }
    }
}