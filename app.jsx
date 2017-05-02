//    import Todo__View from 'todo_view';
//    import AddTodo__View from 'addTodo_view';
//    import TodoStorage from 'todoStorage';
const todoStorage = new TodoStorage();

class App extends React.Component {
    static propTypes = {
        todoStorage: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        var todos = this.props.todoStorage.todos;
        var todosTemplate = todos.map(function (todo, index) {
            return (
                <Todo__View todo={todo} key={index}/>
            )
        });
        return (
            <div className="todos-div">
                <AddTodo__View/>
                {todosTemplate}
            </div>
        );
    }
}

todoStorage.onready(() => {
    ReactDOM.render(
        <App todoStorage={todoStorage}/>,
        document.getElementById('root')
    );
});