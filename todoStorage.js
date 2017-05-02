// import Todo from 'todo'

// export default
class TodoStorage {
    constructor() {
        this.storage = window.localStorage;

        /**
         * Массив Todo'шек
         * @type {Todo[]}
         */
        this.todos = [];

        this.load();
    }

    save() {
        this.storage['todos'] = JSON.stringify(this.todos);
    }

    load() {
        this.todos = [];
        try {
            JSON.parse(this.storage['todos']).forEach((obj) => {
                this.todos.push(new Todo(obj));
            });
        } catch (ex) {
            console.log('new todos list');
        }

        console.log('loaded ' + this.todos.length + ' todos');
    }

    add(todo) {
        this.todos.push(todo);
    }
}