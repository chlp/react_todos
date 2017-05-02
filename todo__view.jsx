class Todo__View extends React.Component {
    static propTypes = {
        todo: PropTypes.any.isRequired,
        todoStorage: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo
        };
        this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
    }

    onDeleteBtnClick() {
        this.props.todoStorage.remove(this.state.todo);
    }

    render() {
        var todo = this.state.todo;
        return (
            <div>
                | {todo.about} | {'' + todo.date} | {todo.done} |
                <input type="button" value="delete" onClick={this.onDeleteBtnClick}/>
            </div>
        );
    }
}