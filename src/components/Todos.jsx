import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="text-blue-600 px-3 py-1.5 bg-black min-h-screen">
      <h1 className="text-white font-bold text-[45px] text-center">Todos</h1>
      <ul className="flex flex-col gap-2 items-center mt-5">
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className="px-3 py-1.5 bg-gray-100 rounded inline-block"
            >
              {todo.text}
              <button
                className="px-3 py-1.5 bg-red-500 text-white rounded-lg ml-5 active:bg-red-600"
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
