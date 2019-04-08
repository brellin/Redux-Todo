import { NEW_TODO, COMPLETER, CLEAR_COMPLETED } from '../actions';

const initialState = localStorage.getItem('todos') === null ? {
    todos: [
        {
            value: 'Functionality',
            completed: true
        },
        {
            value: 'Style',
            completed: true
        }
    ]
} : JSON.parse(localStorage.getItem('todos'));

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case NEW_TODO:
            const newTodo = {
                ...state,
                todos: [...state.todos, action.payload]
            }
            localStorage.setItem('todos', JSON.stringify(newTodo))
            return newTodo;
        case COMPLETER:
            const completer = {
                ...state,
                todos: [...state.todos.map(todo => {
                    if (todo.value === action.payload.value) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo;
                })]
            }
            localStorage.setItem('todos', JSON.stringify(completer))
            return completer;
        case CLEAR_COMPLETED:
            const cleared = {
                ...state,
                todos: state.todos.filter(todo => todo.completed === false)
            };
            localStorage.setItem('todos', JSON.stringify(cleared));
            return cleared;
        default:
            return state
    }
}

export default reducer;