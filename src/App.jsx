import { useState, useEffect } from "react";
import { MinusCircleIcon } from "@heroicons/react/solid";

const getLocalData = () => {
  const data = localStorage.getItem("todos");
  if (data) return JSON.parse(data);
  return [];
};

function App() {
  const [todos, setTodos] = useState(getLocalData());
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const timeCreated = new Date().getTime();

    let todoObject = {
      id: timeCreated,
      task: input,
      completed: false,
    };

    setTodos([...todos, todoObject]);
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDelete = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <div className="container max-w-sm mx-auto mt-10 h-[80vh] rounded-xl border border-slate-700 flex flex-col">
      <h1 className="text-center p-2 font-bold my-4">To Do App</h1>

      <form className="p-4" onSubmit={handleSubmit}>
        <input
          className="border border-stone-700 rounded-xl py-2 px-1"
          type="text"
          placeholder="Add new task"
          value={input}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="border border-stone-700 rounded-xl px-4 py-2 ml-2"
        >
          Add
        </button>
      </form>

      <div className="my-2">
        {todos.length === 0 ? (
          <p className="p-4">No data to display</p>
        ) : (
          todos.map((todo) => {
            return (
              <div key={todo.id} className="flex justify-between px-4">
                <p>{todo.task}</p>{" "}
                <button onClick={() => handleDelete(todo.id)}>
                  <MinusCircleIcon className="w-6 h-6" />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
