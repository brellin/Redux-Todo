export const NEW_TODO = 'NEW_TODO';

export const newTodo = todo => {
    return {
        type: NEW_TODO,
        payload: todo
    }
}

export const COMPLETER = 'COMPLETER';

export const completer = todo => {
    return {
        type: COMPLETER,
        payload: todo
    }
}

export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const clearCompleted = e => {
    e.preventDefault();
    return {
        type: CLEAR_COMPLETED
    }
}
