//    import Todo__View from 'todo_view';
//    import AddTodo__View from 'addTodo_view';
//    import TodoStorage from 'todoStorage';
const eventEmitter = new EventEmitter();
const todoStorage = new TodoStorage(eventEmitter);

class App extends React.Component {
    static propTypes = {
        todoStorage: PropTypes.any.isRequired,
        eventEmitter: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            todoStorage: this.props.todoStorage
        };
    }

    componentDidMount() {
        var self = this;
        this.props.eventEmitter.addListener('Todos.update', (todoStorage) => {
            self.setState({
                todoStorage: todoStorage
            });
        });
    }

    componentWillUnmount() {
        this.props.eventEmitter.removeListener('Todos.update');
    }

    render() {
        let todosTemplate = this.state.todoStorage.todos.map(function (todo, index) {
            return (
                <Todo__View todo={todo} key={index}/>
            )
        });
        return (
            <div className="todos-div">
                <AddTodo__View todoStorage={this.props.todoStorage}/>
                {todosTemplate}
            </div>
        );
    }
}

todoStorage.onready(() => {
    ReactDOM.render(
        <App todoStorage={todoStorage} eventEmitter={eventEmitter}/>,
        document.getElementById('root')
    );
});