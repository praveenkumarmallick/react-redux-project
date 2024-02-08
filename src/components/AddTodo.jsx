import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form
        className="space-x-4 w-[100vw] h-auto bg-blue-700  p-5 text-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className=" px-4 py-2 outline-none border-none rounded-md bg-gray-300 font-semibold text-[20px]"
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="px-4 py-2 bg-red-600 font-semibold rounded text-white">
          Add Todo
        </button>
      </form>
    </>
  );
};

export default AddTodo;
