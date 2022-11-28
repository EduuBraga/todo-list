import React, { useContext } from 'react';
import { TodoContext } from "../../provider";

import imgCloseURL from '../../assets/close.png';

import {
  Card,
  Container,
  SelectedImportanceTask,
  Button,
  InputTask,
  ContainerInputText,
  ContainerSelectImportance,
  ImgClose
} from "./style";

export const ModalModifyTask = () => {
  const {
    inputModalModifyTask,
    selectModalModifyTask,
    handleInputText,
    handleSubmitModal,
    handleValueSelectImportance,
    setModalModifyTaskIsVisible
  } = useContext(TodoContext);

  return (
    <Container>
      <Card onSubmit={handleSubmitModal}>
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

        <Button>Mudar Tarefa</Button>

        <ImgClose
          onClick={_ => { setModalModifyTaskIsVisible(false) }}
          src={imgCloseURL}
          alt="Fechar modal"
        />
      </Card>
    </Container>
  );
}