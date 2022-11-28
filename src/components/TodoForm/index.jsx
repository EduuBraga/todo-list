import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../../provider";

import {
  Container,
  Form,
  ButtonForm,
  InputTask,
  SelectedImportanceTask
} from "./style";

export const TodoForm = () => {
  const { addItemList } = useContext(TodoContext);

  const [valueInputTask, setValueInputTask] = useState('');
  const [valueInputImportance, setValueInputImportance] = useState(1);
  const [dateTask, setDateTask] = useState('');
  const [buttonIsClickable, setButtonIsClickable] = useState(false);

  function handleValueInput(event) {
    let text = event.target.value;
    setValueInputTask(text);

    text !== '' ? setButtonIsClickable(true) : setButtonIsClickable(false);
  }

  function handleValueSelectImportance(event) {
    const valueSelect = event.target.value;
    const valueStringToNumber = Number(valueSelect);

    setValueInputImportance(valueStringToNumber);
  }

  function handleCurrentDate() {
    let currentDate = new Date().toLocaleDateString();
    setDateTask(currentDate);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    handleCurrentDate();

    if (valueInputTask) {
      addItemList(valueInputTask, dateTask, valueInputImportance);
      setValueInputTask('');
      setButtonIsClickable(false)
    }
  }

  useEffect(() => {
    let currentDate = new Date().toLocaleDateString()
    setDateTask(currentDate)
  }, [])

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputTask
          type="text"
          name="task"
          onChange={handleValueInput}
          value={valueInputTask}
          placeholder='Adicionar uma tarefa'
        />

        <SelectedImportanceTask
          name="importance"
          onChange={handleValueSelectImportance}
        >
          <option value="1">Importância</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </SelectedImportanceTask>

        <ButtonForm isClickable={buttonIsClickable} title="Adicionar tarefa">
          Adicionar
        </ButtonForm>
      </Form>
    </Container>
  );
}