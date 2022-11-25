import React, { useContext } from 'react';
import { TodoContext } from "../../provider";

import imgCheckOffURL from '../../assets/check-off.png';
import imgCheckHoverURL from '../../assets/check-hover.png';
import imgTrashURL from '../../assets/trash.png';
import imgTrashRedURL from '../../assets/trash-red.png';

import { Container, ButtonCheck, ButtonTrash } from './style';

export const TasksNotDone = ({ task }) => {
  const { toggleDoneTask, removeItemList } = useContext(TodoContext);

  return (
    <Container key={task.id} taskDone={task.done}>
      <ButtonCheck onClick={() => { toggleDoneTask(task.id) }}>
        <img alt='tarefa não finalizada' src={imgCheckOffURL} />
        <img alt='tarefa não finalizada' src={imgCheckHoverURL} />
      </ButtonCheck>

      {task.description}

      <ButtonTrash onClick={() => { removeItemList(task.id) }}>
        <img title='Deletar tarefa' src={imgTrashURL} alt='deletar tarefa' />
        <img title='Deletar tarefa' src={imgTrashRedURL} alt='deletar tarefa' />
      </ButtonTrash>
    </Container>
  )
}