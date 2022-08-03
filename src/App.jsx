import { useState, useEffect } from "react";
import { MinusCircleIcon } from "@heroicons/react/solid";

const getData = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function App() {
  const [todos, setTodos] = useState(getData());
  const [input, setInput] = useState("");

  const addTodo = () => {
    localStorage.setItem("todos", JSON.stringify(input));
    setInput("");
  }

  const handleInput = e => {
    setInput(e.target.value);
    console.log(input)
  };

  return (
    <div className="container max-w-sm mx-auto mt-10 h-[80vh] rounded-xl border border-slate-700 flex flex-col">
      <h1 className="text-center p-2 font-bold my-4">To Do App</h1>

      <form className="p-4">
        <input
          className="border border-stone-700 rounded-xl py-2 px-1"
          type="text"
          placeholder="Add new task"
          value={input}
          onChange={(e) => handleInput(e)}
        />
        <button
          type="submit"
          className="border border-stone-700 rounded-xl px-4 py-2 ml-2"
          onClick={addTodo}
        >
          Add
        </button>
      </form>

      <div className="my-2">{
         
      }</div>
    </div>
  );
}

export default App;
