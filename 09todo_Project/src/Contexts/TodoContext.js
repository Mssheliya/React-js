import {createContext,useContext} from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "learn react",
            completed: false,
        }
    ],
    AddTodo: (todo)=> {},
    UpdateTodo: (id,todo)=> {},
    DeleteTodo: (id)=> {},
    ToggleComplete: (id)=> {},
});

export const TodoContextprovider = TodoContext.Provider;

export const useTodo = ()=> {
   return useContext(TodoContext);
}
