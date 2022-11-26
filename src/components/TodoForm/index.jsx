import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../../provider";

import { Container, Form, ButtonForm } from "./style";

export const TodoForm = () => {
  const { addItemList } = useContext(TodoContext);
  const [valueInputTask, setValueInputTask] = useState('');
  const [dateTask, setDateTask] = useState(null);
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

  function handleCurrentDate(){
    let currentDate = new Date().toLocaleDateString()
    setDateTask(currentDate)
  }

  function handleNewTask(event) {
    event.preventDefault();

    handleCurrentDate()

    if (valueInputTask) {
      addItemList(valueInputTask, dateTask);
      setValueInputTask('');
    }
  }

  useEffect(()=>{
    let currentDate = new Date().toLocaleDateString()
    setDateTask(currentDate)
  }, [])

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