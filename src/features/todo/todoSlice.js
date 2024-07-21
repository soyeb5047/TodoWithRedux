import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // console.log('came here', action);
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // console.log(action, 'in removeTodo')
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer
