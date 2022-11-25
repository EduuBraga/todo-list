import React, { useContext } from "react";
import { TodoContext } from "../../provider";

import imgCheckOffURL from '../../assets/check-off.png';
import imgCheckOnURL from '../../assets/check-on.png';
import imgTrashURL from '../../assets/trash.png';
import imgTrashRedURL from '../../assets/trash-red.png';
import imgDisappointedWomanURL from '../../assets/mulher-decepcionada.png';

import {
  ContainerResultSearch,
  ItemListSearched,
  ButtonCheck,
  ButtonTrash,
  ContainerWithoutResult,
  FeedbackSearch
} from "./style";

export const SearchedTasks = () => {
  const {
    listTasksSearched,
    toggleDoneTask,
    removeItemList,
    inputSearch
  } = useContext(TodoContext);

  return (
    <>
      <FeedbackSearch>Pesquisando por "{inputSearch}"</FeedbackSearch>

      {listTasksSearched.length >= 1 ? (
        <ContainerResultSearch>
          {listTasksSearched.map(task =>
            <ItemListSearched key={task.id} taskDone={task.done}>
              <ButtonCheck onClick={() => { toggleDoneTask(task.id) }}>
                {task.done ? (
                  <img alt='tarefa finalizada' src={imgCheckOnURL} />
                ) : (
                  <img alt='tarefa não finalizada' src={imgCheckOffURL} />
                )}
              </ButtonCheck>

              {task.description}

              <ButtonTrash onClick={() => { removeItemList(task.id) }}>
                <img title='Deletar tarefa' src={imgTrashURL} alt='deletar tarefa' />
                <img title='Deletar tarefa' src={imgTrashRedURL} alt='deletar tarefa' />
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