class Todo__View extends React.Component {
    static propTypes = {
        todo: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo
        };
    }

    render() {
        var todo = this.props.todo;
        return (
            <div>
                | {todo.about} | {todo.date} | {todo.done} |
            </div>
        );
    }
}