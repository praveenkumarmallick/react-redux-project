import React from "react";
import { Todos } from "./components/Todos";
import AddTodo from "./components/addTodo";

const App = () => {
  return (
    <div>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
