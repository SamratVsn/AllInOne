import { useState } from 'react';

function ToDo() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => setTodo(e.target.value);

  const handleAdd = () => {
    if (todo.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: todo,
    };
    setTodos([...todos, newTodo]);
    setTodo('');
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 py-10 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-lg space-y-8">
        {/* Input Section */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-sky-300 text-center">Add a To-Do</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              onChange={handleChange}
              value={todo}
              placeholder="Enter your task..."
              className="flex-1 bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-lg placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              onClick={handleAdd}
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            >
              Add
            </button>
          </div>
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center text-yellow-300">Your Todos</h2>
          {todos.length === 0 && (
            <p className="text-center text-slate-400 italic">No tasks yet. Add some!</p>
          )}
          {todos.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl flex justify-between items-center"
            >
              <p className="text-lg text-white">{item.text}</p>
              <div className="flex gap-2">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded-md shadow">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDo;
