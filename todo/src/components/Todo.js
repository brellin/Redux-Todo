import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div className='Todo'>
                <span
                    style={{
                        textDecoration: this.props.todo.completed === false ?
                            'none' :
                            'dashed line-through midnightblue'
                    }}
                >
                    <input
                        type='checkbox'
                        onChange={() => this.props.completer(this.props.todo)}
                        checked={this.props.todo.completed === false ? false : true}
                    />{this.props.todo.value}</span>
            </div>
        )
    }
}
