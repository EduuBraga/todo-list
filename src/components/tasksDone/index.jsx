import React, { useContext } from 'react';
import { TodoContext } from "../../provider";

import imgCheckOnURL from '../../assets/check-on.png';
import imgTrashURL from '../../assets/trash.png';
import imgTrashRedURL from '../../assets/trash-red.png';
import imgTrashWhiteURL from '../../assets/trash-light.png';
import imgFlagURL from '../../assets/flag.png';

import {
  ItemDone,
  ButtonCheck,
  ButtonTrash,
  ContentMain,
  StatusTask
} from './style';

export const TasksDone = ({ task }) => {
  const {
    toggleDoneTask,
    removeItemList,
    modifyTask,
    theme
  } = useContext(TodoContext);

  return (
    <ItemDone key={task.id} onClick={_ => (modifyTask(event, task.id))}>
      <ButtonCheck onClick={() => { toggleDoneTask(task.id) }}>
        <img alt='tarefa finalizada' src={imgCheckOnURL} />
      </ButtonCheck>

      <ContentMain taskDone={task.done}>
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

      <ButtonTrash onClick={() => { removeItemList(task.id) }}>
        {theme.title === 'light' ? (
          <>
            <img title='Deletar tarefa' src={imgTrashURL} alt='deletar tarefa' />
            <img title='Deletar tarefa' src={imgTrashRedURL} alt='deletar tarefa' />
          </>
        ) : (
          <>
            <img title='Deletar tarefa' src={imgTrashWhiteURL} alt='deletar tarefa' />
            <img title='Deletar tarefa' src={imgTrashRedURL} alt='deletar tarefa' />
          </>
        )}
      </ButtonTrash>
    </ItemDone>
  )
}