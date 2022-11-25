import React, { useState, useContext } from "react";
import { TodoContext } from "../../provider";

import { Container, Form, ButtonForm } from "./style";

export const TodoForm = () => {
  const { addItemList } = useContext(TodoContext);
  const [valueInputTask, setValueInputTask] = useState('');
  const [valueInputDate, setValueInputdate] = useState(null);
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

  function handleValueInputDate(event) {
    let { value } = event.target
    setValueInputdate(value)
  }

  function handleNewTask(event) {
    event.preventDefault();

    if (valueInputTask) {
      addItemList(valueInputTask, valueInputDate);
      setValueInputTask('');
    }
  }

  return (
    <Container>
      <Form className="form">
        <input
          type="text"
          name="task"
          onChange={handleValueInput}
          value={valueInputTask}
          placeholder='Adicionar uma tarefa'
        />

        <input
          type="date"
          name="date"
          onChange={handleValueInputDate}
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