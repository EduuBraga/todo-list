import React, { useContext } from 'react';
import { TodoContext } from "../../provider";

import imgCheckOffURL from '../../assets/check-off.png';
import imgCheckOnURL from '../../assets/check-on.png';
import imgCloseURL from '../../assets/close.png';

import {
  Card,
  Container,
  SelectedImportanceTask,
  Button,
  InputTask,
  ContainerInputText,
  ContainerSelectImportance,
  ContainerBottom,
  ContainerTop
} from "./style";

export const ModalModifyTask = () => {
  const {
    inputModalModifyTask,
    selectModalModifyTask,
    handleInputText,
    handleSubmitModal,
    handleValueSelectImportance,
    setModalModifyTaskIsVisible,
    taskDoneOrNotDone,
    toggleTaskDoneOrNotDone
  } = useContext(TodoContext);

  return (
    <Container>
      <Card onSubmit={handleSubmitModal}>
        <ContainerTop>
          <h2>Modificar Tarefa</h2>

          <img
            onClick={_ => { setModalModifyTaskIsVisible(false) }}
            src={imgCloseURL}
            alt="Fechar modal"
          />
        </ContainerTop>

        <ContainerInputText>
          <label>Descrição</label>

          <InputTask
            onChange={handleInputText}
            type='text'
            placeholder="Texto da Tarefa"
            value={inputModalModifyTask}
          />
        </ContainerInputText>

        <ContainerSelectImportance>
          <label>Importância</label>
          <SelectedImportanceTask
            name="importance"
            value={selectModalModifyTask}
            onChange={handleValueSelectImportance}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </SelectedImportanceTask>
        </ContainerSelectImportance>

        <ContainerBottom>
          <div>
            <p>Finalizada: </p>

            {taskDoneOrNotDone ? (
              <img src={imgCheckOnURL} alt="" onClick={toggleTaskDoneOrNotDone} />
            ) : (
              <img src={imgCheckOffURL} alt="" onClick={toggleTaskDoneOrNotDone} />
            )}
          </div>

          <Button>Mudar Tarefa</Button>
        </ContainerBottom>
      </Card>
    </Container>
  );
}