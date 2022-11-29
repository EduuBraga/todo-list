import React, { useContext, useState } from 'react';
import { TodoContext } from "../../provider";

import imgArrowRightURL from '../../assets/arrow-right.png';
import imgArrowRightWhiteURL from '../../assets/arrow-right-white.png';

import { TasksNotDone } from '../tasksNotDone';
import { TasksDone } from '../tasksDone';

import { Container, ListTasksNotDone, ListTasksDone, HeaderListTasksDone } from './style';

export function List() {
  const { 
    tasksDone, 
    tasksNotDone, 
    quantityTasksDone,
    theme 
  } = useContext(TodoContext);
  const [show_hiddenTasksDone, setShow_hiddenTasksDone] = useState(false);

  const toggleShowHiddenTasksDone = () => {
    show_hiddenTasksDone ? setShow_hiddenTasksDone(false)
      : setShow_hiddenTasksDone(true);
  }

  return (
    <Container>
      <ListTasksNotDone>
        {tasksNotDone.map(task =>
          <TasksNotDone key={task.id} task={task} />
        )}
      </ListTasksNotDone>

      {tasksDone.length >= 1 &&
        <ListTasksDone>
          <HeaderListTasksDone
            tasksDoneisVisible={show_hiddenTasksDone}
            onClick={toggleShowHiddenTasksDone}
          >
            {theme.title === 'light' ? (
              <img src={imgArrowRightURL} alt="Seta" />
            ) : (
              <img src={imgArrowRightWhiteURL} alt="Seta" />
            )}
            <h4>Concluídas</h4>
            <span>{quantityTasksDone}</span>
          </HeaderListTasksDone>

          {tasksDone.map(task => {
            if (show_hiddenTasksDone) {
              return <TasksDone key={task.id} task={task} />
            }
          })}
        </ListTasksDone>
      }
    </Container>
  )
}