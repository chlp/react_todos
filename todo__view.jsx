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
        this.dateDiffStr = this.dateDiffStr.bind(this);
    }

    onDoneBtnClick() {
        this.state.todo.changeDone();
    }

    onDeleteBtnClick() {
        this.state.todo.remove();
    }

    dateDiffStr() {
        let todo = this.state.todo;
        console.log(new Date() - todo.date);
    }

    render() {
        let todo = this.state.todo;
        return (
            <div className="todo-div">
                <div className="todo-about">{todo.about}</div>
                <div className="todo-date">{'' + todo.date}</div>
                <div className="todo-done">{todo.done ? 1 : 0}</div>
                <div><input type="button" value="done" onClick={this.onDoneBtnClick}/></div>
                <div><input type="button" value="delete" onClick={this.onDeleteBtnClick}/></div>
                <div><input type="button" value="date diff" onClick={this.dateDiffStr}/></div>
            </div>
        );
    }
}