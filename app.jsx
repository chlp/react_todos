import React from 'react';
import Todo__View from 'todo__view';
import AddTodo__View from 'addTodo__view';
import TodoStorage from 'todoStorage';

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
            todos: this.props.todoStorage.todos
        };
    }

    componentDidMount() {
        this.props.eventEmitter.addListener('Todos.update', (todos) => {
            this.setState({
                todos: todos
            });
        });
    }

    componentWillUnmount() {
        this.props.eventEmitter.removeListener('Todos.update');
    }

    render() {
        let todosTemplate = this.state.todos.map(todo => {
            return (
                <Todo__View todo={todo} key={todo.guid}/>
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