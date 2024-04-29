import { useEffect, useState } from 'react'
import { TodoForm,TodoItems } from './Components'
import './App.css'
import { TodoContextprovider } from './Contexts';

function App() {
  const [todos, setTodos] = useState([]);

  function AddTodo(todo){
      setTodos((prev)=> [...prev,{id: Date.now(), ...todo}]);
  };

  function UpdateTodo(id,todo) {
      setTodos((prevTodos)=> prevTodos.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)));
  };

  function DeleteTodo(id) {
      setTodos((prevTodo)=> prevTodo.filter((Todo)=> Todo.id !== id))
  };

  function ToggleComplete(id) {
      setTodos((prevTodos)=> prevTodos.map((prevTodo)=> prevTodo.id === id ? 
                {...prevTodo,completed: !prevTodo.completed}: prevTodo));
  };

  useEffect(()=> {
      const todos = JSON.parse(localStorage.getItem("todos"));
      if (todos && todos.length > 0) {
          setTodos(todos);
      }
  }, []);

  useEffect(()=> {
     localStorage.setItem("todos", JSON.stringify(todos)) 
  }, [todos]);

  
  return (
    <TodoContextprovider value={{todos,AddTodo,UpdateTodo,DeleteTodo,ToggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=> (
                <div key={todo.id} className='w-full'>
                  <TodoItems todo={todo}/>
                </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextprovider>
  )
}

export default App
