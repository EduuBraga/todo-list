import React, { useContext } from "react";
import { TodoContext } from "../../provider";

import imgCheckOffURL from '../../assets/check-off.png';
import imgCheckOffDarkURL from '../../assets/check-off-dark.png';
import imgCheckOnURL from '../../assets/check-on.png';
import imgTrashURL from '../../assets/trash.png';
import imgTrashRedURL from '../../assets/trash-red.png';
import imgTrashWhiteURL from '../../assets/trash-light.png';
import imgDisappointedWomanURL from '../../assets/mulher-decepcionada.png';
import imgFlagURL from '../../assets/flag.png';

import {
  ContainerResultSearch,
  ItemListSearched,
  ButtonCheck,
  ButtonTrash,
  ContainerWithoutResult,
  FeedbackSearch,
  ContentMain,
  StatusTask
} from "./style";

export const SearchedTasks = () => {
  const {
    listTasksSearched,
    toggleDoneTask,
    removeItemList,
    inputSearch,
    modifyTask,
    theme
  } = useContext(TodoContext);

  return (
    <>
      <FeedbackSearch>Pesquisando por "{inputSearch}"</FeedbackSearch>

      {listTasksSearched.length >= 1 ? (
        <ContainerResultSearch>
          {listTasksSearched.map(task =>
            <ItemListSearched key={task.id} onClick={_ => (modifyTask(event, task.id))}>
              <ButtonCheck onClick={() => { toggleDoneTask(task.id) }}>
                {task.done ? (
                  <img alt='tarefa finalizada' src={imgCheckOnURL} />
                ) : (
                  theme.title === 'light' ? (
                    <img alt='tarefa não finalizada' src={imgCheckOffURL} />
                  ) : (
                    <img alt='tarefa não finalizada' src={imgCheckOffDarkURL} />
                  )
                )}
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
            </ItemListSearched>
          )}
        </ContainerResultSearch>
      ) : (
        <ContainerWithoutResult>
          <img src={imgDisappointedWomanURL} alt="disappointed woman" />
          <p>Procuramos, mas não encontramos o <br /> que você procurava.</p>
        </ContainerWithoutResult>
      )}
    </>
  );
}