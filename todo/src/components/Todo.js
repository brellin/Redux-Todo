import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div className='Todo'>
                {this.props.todo.value}
            </div>
        )
    }
}
