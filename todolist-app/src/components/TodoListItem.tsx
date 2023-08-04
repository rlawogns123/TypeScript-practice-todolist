import React from "react";
import { TodoListItemType } from "../App";

type TodoListItemProps = {
  todoItem: TodoListItemType;
  toggleDone: (no: number) => void;
  deleteTodo: (no: number) => void;
};

const TodoListItem = (props: TodoListItemProps) => {
  return (
    <li>
      {props.todoItem.todo} {props.todoItem.done ? "완료" : "미완료"}{" "}
      <span onClick={() => props.deleteTodo(props.todoItem.no)}>삭제</span>
    </li>
  );
};

export default TodoListItem;
