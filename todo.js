// export default
class Todo {
    constructor(obj = {
        about: '',
        date: new Date(),
        done: false
    }) {
        this.about = obj.about;
        this.date = '' + new Date(obj.date);
        this.done = obj.done;
    }

    date() {
        return new Date(this.date);
    }
}