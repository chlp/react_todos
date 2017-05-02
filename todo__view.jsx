class Todo__View extends React.Component {
    static propTypes = {
        todo: PropTypes.any.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo
        };
        this.onDoneBtnClick = this.onDoneBtnClick.bind(this);
        this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
    }

    onDoneBtnClick() {
        this.state.todo.changeDone();
    }

    onDeleteBtnClick() {
        this.state.todo.remove();
    }

    render() {
        var todo = this.state.todo;
        return (
            <div>
                | {todo.about} | {'' + todo.date} | {todo.done ? 1 : 0} |
                <input type="button" value="done" onClick={this.onDoneBtnClick}/>
                <input type="button" value="delete" onClick={this.onDeleteBtnClick}/>
            </div>
        );
    }
}