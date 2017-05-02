// export default
class Todo {
    constructor(obj = {
        about: '',
        date: new Date(),
        done: false
    }) {
        this.about = obj.about;
        this.date = obj.date;
        this.done = obj.done;
    }
}