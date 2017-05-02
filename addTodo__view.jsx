class AddTodo__View extends React.Component {
    constructor(props) {
        super(props);
    }

    toDateTimeInputValue(date) {
        var local = new Date(date);
        local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
        return local.toJSON().slice(0, 16);
    }

    render() {
        var todo = this.props.todo;
        return (
            <form>
                <strong>New todo</strong><br/>
                About:
                <input type="text" name="about" required={true} defaultValue=""/><br/>
                Date:
                <input type="datetime-local" name="date" required={true} defaultValue={this.toDateTimeInputValue(new Date())}/><br/>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}