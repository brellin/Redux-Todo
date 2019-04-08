import React, { Component } from 'react'
import { connect } from 'react-redux';
import Todo from './Todo';
import { newTodo, completer, clearCompleted } from '../actions';

class TodoContainer extends Component {
    state = {
        newTodoValue: ''
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addTodo = e => {
        e.preventDefault();
        const todo = {
            value: this.state.newTodoValue,
            completed: false
        }
        this.props.newTodo(todo);
        this.setState({
            newTodoValue: ''
        })
    }

    completer = todo => {
        this.props.completer(todo)
    }

    clearCompleted = e => {
        this.props.clearCompleted(e);
    }

    render() {
        return (
            <div className='TodoContainer'>
                <h1>Todos</h1>
                {this.props.todos.map((todo, id) => (
                    <Todo
                        todo={todo}
                        key={id}
                        completer={this.completer}
                    />
                ))}
                <form
                    className='addTodo'
                    onSubmit={this.addTodo}
                >
                    <input
                        name='newTodoValue'
                        value={this.state.newTodoValue}
                        onChange={this.handleChanges}
                    />
                    <button>Add</button>
                </form>
                <button onClick={this.clearCompleted}>Clear</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { newTodo, completer, clearCompleted })(TodoContainer);