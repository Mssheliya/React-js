import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:2,text:"hello ji",complete:false}]
}    

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo:(state, action)=> {
            const todo = {
                id: nanoid(),
                text: action.payload,
                complete: false
            };
           state.todos.push(todo); 
        },
        deleteTodo:(state, action)=> {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload);
        },
    }

});

export const {addTodo,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;