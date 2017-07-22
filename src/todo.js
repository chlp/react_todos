export default class Todo {
    constructor(obj = {
        about: '',
        date: new Date(),
        done: false
    }, todoStorage) {
        this.about = obj.about;
        this.date = new Date(obj.date);
        this.done = obj.done;

        this.guid = this.guid();
        this.todoStorage = todoStorage;
    }

    changeDone() {
        this.done = !this.done;
        this.todoStorage.sync();
    }

    remove() {
        this.todoStorage.remove(this);
    }

    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
}