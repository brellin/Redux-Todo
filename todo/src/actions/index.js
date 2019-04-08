export const NEW_TODO = 'NEW_TODO';

export const newTodo = todos => {
    return {
        type: NEW_TODO,
        payload: todos
    }
}
