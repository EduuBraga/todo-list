import React, { useState, useContext } from "react";
import { TodoContext } from "../../provider";

import { Container, Form, ButtonForm } from "./style";

export const TodoForm = () => {
  const { addItemList } = useContext(TodoContext);
  const [valueInputTask, setValueInputTask] = useState('');
  const [buttonIsClickable, setButtonIsClickable] = useState(false);

  function handleValueInput(event) {
    let text = event.target.value;
    setValueInputTask(text);

    if (text !== '') {
      setButtonIsClickable(true);
    } else {
      setButtonIsClickable(false);
    }
  }

  function handleNewTask(event) {
    event.preventDefault();

    if (valueInputTask) {
      addItemList(valueInputTask);
      setValueInputTask('');
    }
  }

  return (
    <Container>
      <Form>
        <input
          type="text"
          name="task"
          onChange={handleValueInput}
          value={valueInputTask}
          placeholder='Adicionar uma tarefa'
        />

        <ButtonForm
          isClickable={buttonIsClickable}
          title="Adicionar tarefa"
          onClick={handleNewTask}
        >
          Adicionar
        </ButtonForm>
      </Form>
    </Container>
  );
}