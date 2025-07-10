import { useState } from 'react'

function ToDo() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  const handleAdd = () => {
    if (todo.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: todo,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  }
  
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  return (
    <div className="min-h-screen font-medium px-4 sm:px-6 mx-auto flex flex-col bg-slate-400 justify-center items-center">
      <div className="m-10 bg-gray-500 p-10 rounded-2xl">
        <div className="add bg-gray-200 p-6 rounded-xl shadow-lg mb-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4 hover:underline">Add a To-Do</h1>
          <input required onChange={handleChange} placeholder="Enter your task..." value={todo} type="text" className="w-full sm:w-[30vw] bg-white text-black border border-gray-300 rounded-lg p-3 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button onClick={handleAdd} className="cursor-pointer mx-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200">Add</button>
        </div>
        <div className="maps mt-6">
          <h1 className="text-xl font-bold hover:underline text-white mb-4 text-center">Todos</h1>
          {todos.map((items) => {
            return (
              <div key={items.id} className="bg-gray-700 text-white flex justify-between items-center p-4 rounded-lg shadow-md mb-5">
                <p className="text-lg">{items.text}</p>
                <div className="flex gap-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer px-3 py-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(items.id)} className="bg-red-500 hover:bg-red-600 text-white cursor-pointer px-3 py-1 rounded">Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ToDo