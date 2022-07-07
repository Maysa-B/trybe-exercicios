import { useState } from "react";

function useArray() {
  const [todoList, setTodoList] = useState([]);

  const atualizeList = (newTask) => {
    setTodoList([...todoList, newTask]);
  }

  return [todoList, atualizeList];
}

export default useArray;