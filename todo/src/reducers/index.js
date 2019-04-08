import { NEW_TODO } from '../actions';

const initialState = {
    todos: [
        {
            value: 'Functionality',
            completed: false
        },
        {
            value: 'Style',
            completed: false
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state
    }
}

export default reducer;