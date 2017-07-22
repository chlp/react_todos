import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

export default class AddTodo__View extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    static toDateTimeInputValue(date) {
        let local = new Date(date);
        local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
        return local.toJSON().slice(0, 16);
    }

    static fromDateTimeInput(dateStr) {
        let d = new Date(dateStr);
        d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
        return d;
    }

    onFormSubmit(ev) {
        ev.preventDefault();

        let about = this.about.value.trim();
        let date = AddTodo__View.fromDateTimeInput(this.date.value);
        let done = false;

        let todo = new Todo({about, date, done}, this.props.todoStorage);
        this.props.todoStorage.add(todo);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <strong>New todo</strong><br/>
                About:
                <input ref={(input) => { this.about = input; }} type="text" defaultValue=""/><br/>
                Date:
                <input ref={(input) => { this.date = input; }} type="datetime-local" defaultValue={AddTodo__View.toDateTimeInputValue(new Date())}/><br/>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

AddTodo__View.propTypes = {
    todoStorage: PropTypes.any.isRequired
};