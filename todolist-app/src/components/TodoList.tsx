import React from "react";
import { TodoListItemType } from "../App";
import TodoListItem from "./TodoListItem";

type AppProps = {
  todoList: Array<TodoListItemType>;
  toggleDone: (no: number) => void;
  deleteTodo: (no: number) => void;
};

const TodoList = (props: AppProps) => {
  let items = props.todoList.map((item) => {
    return (
      <TodoListItem
        key={item.no}
        todoItem={item}
        toggleDone={props.toggleDone}
        deleteTodo={props.deleteTodo}
      />
    );
  });
  return <div>{items}</div>;
};

export default TodoList;
