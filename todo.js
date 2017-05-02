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
        this.guid = this.guid();
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


    date() {
        return new Date(this.date);
    }
}