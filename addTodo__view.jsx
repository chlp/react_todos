class AddTodo__View extends React.Component {
    static propTypes = {
        todoStorage: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    toDateTimeInputValue(date) {
        let local = new Date(date);
        local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
        return local.toJSON().slice(0, 16);
    }

    fromDateTimeInput(dateStr) {
        let d = new Date(dateStr);
        d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
        return d;
    }

    onFormSubmit(ev) {
        ev.preventDefault();

        let about = this.refs.about.value.trim();
        let date = this.fromDateTimeInput(this.refs.date.value);
        let done = false;

        let todo = new Todo({about, date, done}, this.props.todoStorage);
        this.props.todoStorage.add(todo);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <strong>New todo</strong><br/>
                About:
                <input ref="about" type="text" name="about" defaultValue=""/><br/>
                Date:
                <input ref="date" type="datetime-local" name="date" defaultValue={this.toDateTimeInputValue(new Date())}/><br/>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}