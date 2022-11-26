import React, { useContext } from 'react';
import { TodoContext } from "../../provider";

import imgCheckOnURL from '../../assets/check-on.png';
import imgTrashURL from '../../assets/trash.png';
import imgTrashRedURL from '../../assets/trash-red.png';

import { ItemDone, ButtonCheck, ButtonTrash, ContentTask } from './style';

export const TasksDone = ({ task }) => {
  const { toggleDoneTask, removeItemList } = useContext(TodoContext);

  return (
    <ItemDone key={task.id}>
      <ButtonCheck onClick={() => { toggleDoneTask(task.id) }}>
          <img alt='tarefa finalizada' src={imgCheckOnURL} />
      </ButtonCheck>

      <ContentTask taskDone={task.done}>
        <p>{task.description}</p>
        <p>{task.date}</p>
      </ContentTask>

      <ButtonTrash onClick={() => { removeItemList(task.id) }}>
        <img title='Deletar tarefa' src={imgTrashURL} alt='deletar tarefa' />
        <img title='Deletar tarefa' src={imgTrashRedURL} alt='deletar tarefa' />
      </ButtonTrash>
    </ItemDone>
  )
}