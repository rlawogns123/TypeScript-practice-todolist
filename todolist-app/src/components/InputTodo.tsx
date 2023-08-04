import React, { useState } from "react";

type InputTodoProps = {
  addTodo: (todo: string) => void;
};

const InputTodo = (props: InputTodoProps) => {
  const [todo, setTodo] = useState<string>("");

  const addHandler = () => {
    props.addTodo(todo);
    setTodo("");
  };

  const enterInput = (e: React.KeyboardEvent) => {
    if (e.key === "Enber") {
      addHandler();
    }
  };

  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="할 일 입력"
        value={todo}
        onChange={changeTodo}
        onKeyUp={enterInput}
      />
      <span onClick={addHandler}>추가</span>
    </div>
  );
};

export default InputTodo;
