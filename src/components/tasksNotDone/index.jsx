import React, { useContext } from 'react';
import { TodoContext } from "../../provider";

import imgCheckOffURL from '../../assets/check-off.png';
import imgCheckHoverURL from '../../assets/check-hover.png';
import imgTrashURL from '../../assets/trash.png';
import imgTrashRedURL from '../../assets/trash-red.png';
import imgFlagURL from '../../assets/flag.png';

import {
  Container,
  ButtonCheck,
  ButtonTrash,
  ContentMain,
  StatusTask
} from './style';

export const TasksNotDone = ({ task }) => {
  const {
    toggleDoneTask,
    removeItemList,
    modifyTask
  } = useContext(TodoContext);

  return (
    <Container key={task.id} onClick={_ => (modifyTask(event, task.id))}>
      <ButtonCheck onClick={_ => { toggleDoneTask(task.id) }}>
        <img alt='tarefa não finalizada' src={imgCheckOffURL} />
        <img alt='tarefa não finalizada' src={imgCheckHoverURL} />
      </ButtonCheck>

      <ContentMain>
        <p>{task.description}</p>

        <StatusTask>
          <p>{task.date}</p>
          |
          <p>
            {task.importance}
            <img src={imgFlagURL} alt="Bandeira" />
          </p>
        </StatusTask>
      </ContentMain>

      <ButtonTrash onClick={_ => { removeItemList(task.id) }}>
        <img title='Deletar tarefa' src={imgTrashURL} alt='deletar tarefa' />
        <img title='Deletar tarefa' src={imgTrashRedURL} alt='deletar tarefa' />
      </ButtonTrash>
    </Container>
  )
}