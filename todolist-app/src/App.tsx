import { useState } from "react";
import { produce } from "immer";

export type TodoListItemType = {
  no: number;
  todo: string;
  done: boolean;
};

function App() {
  const [todoList, setTodoList] = useState<Array<TodoListItemType>>([
    { no: 1, todo: "일어나기", done: false },
    { no: 2, todo: "물마시기", done: false },
    { no: 3, todo: "세수하기", done: false },
    { no: 4, todo: "산책하기", done: false },
  ]);

  const addTodo = (todo: string) => {
    let newTodoList = produce(todoList, (draft) => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (no: number) => {
    let index = todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(todoList, (draft) => {
      draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  };

  const toggleDone = (no: number) => {
    let index = todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };

  return <div>todoList</div>;
}

export default App;
