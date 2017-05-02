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
        this.storage.todos = JSON.stringify(this.todos);
    }

    load() {
        this.todos = [];
        try {
            JSON.parse(this.storage.todos).forEach((obj) => {
                this.todos.push(new Todo(obj));
            });
        } catch (ex) {
            console.log('new todos list');
            this.save();
        }

        console.log('loaded ' + this.todos.length + ' todos');
    }

    add(todo) {
        this.todos.push(todo);
        this.sync();
    }

    sync() {
        var newTodosStr = JSON.stringify(this.todos);
        if (newTodosStr !== this.storage.todos) {
            this.save();
            this.eventEmitter.emit('Todos.update', this);
        }
    }
}