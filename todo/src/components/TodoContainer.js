import React, { Component } from 'react'
import { connect } from 'react-redux';
import Todo from './Todo';
import { newTodo } from '../actions';

class TodoContainer extends Component {
    state = {
        newTodoText: ''
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addTodo = e => {
        e.preventDefault();
        const todo = {
            value: this.state.newTodoText,
            completed: false
        }
        this.props.newTodo(todo);
    }

    render() {
        return (
            <div className='TodoContainer'>
                {this.props.todos.map((todo, id) => (
                    <Todo todo={todo} key={id} />
                ))}
                <form
                    className='addTodo'
                    onSubmit={this.addTodo}
                >
                    <input
                        name='newTodoText'
                        value={this.state.newTodoText}
                        onChange={this.handleChanges}
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { newTodo })(TodoContainer);