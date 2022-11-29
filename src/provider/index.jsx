import React, { useState, createContext } from "react";
import { useEffect } from "react";

import { dark, light } from "../styles/themes";

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);
  const [tasksNotDone, setTasksNotDone] = useState([]);
  const [idTask, setIdTask] = useState(0);
  const [quantityTasksDone, setQuantityTasksDone] = useState(0);

  const addItemList = (descriptionTask, dateTask, Importance) => {
    const task = {
      id: idTask,
      description: descriptionTask,
      date: dateTask,
      done: false,
      importance: Importance
    };

    setList([...list, task]);
    setIdTask(prevState => prevState + 1);
  }

  const removeItemList = idElementClicked => {
    const listCopy = [...list];

    const filteredList = listCopy
      .filter(itemList => itemList.id !== idElementClicked);

    setList(filteredList);
  }

  const toggleDoneTask = idElementClicked => {
    const listCopy = [...list];

    const ReversingDoneItem = listCopy.map(itemList => {
      if (itemList.id === idElementClicked) {
        itemList.done = !itemList.done;
      }

      return itemList;
    })

    setList(ReversingDoneItem);
  }

  const DealingWithTasksNotDone = () => {
    const filteredTasksNotDone = list.filter(task => !task.done);

    const orderTasksNotDoneByImportance = filteredTasksNotDone
      .sort((task1, task2) => task2.importance - task1.importance);

    setTasksNotDone(orderTasksNotDoneByImportance);
  }

  const DealingWithTasksDone = () => {
    const filteredTasksDone = list.filter(task => task.done);

    const orderTaskDoneByImportance = filteredTasksDone
      .sort((task1, task2) => task2.importance - task1.importance);

    setTasksDone(orderTaskDoneByImportance);
    setQuantityTasksDone(filteredTasksDone.length);
  }

  //Lidando com modal de modificar a tarefa
  const [taskModify, setTaskModify] = useState({})
  const [modalModifyTaskIsVisible, setModalModifyTaskIsVisible] = useState(false)
  const [inputModalModifyTask, setInputModalModifyTask] = useState('')
  const [selectModalModifyTask, setSelectModaModifyTask] = useState('')
  const [taskDoneOrNotDone, setTaskDoneOrNotDone] = useState(false)

  const modifyTask = (event, idElementClicked) => {
    const TagNameElementClicked = event.target.tagName

    if(TagNameElementClicked !== 'IMG'){
      const listCopy = [...list];

      const filteredTaskClicked = listCopy
        .filter(task => task.id === idElementClicked)[0];
  
      const taskClicked = { ...filteredTaskClicked };
  
      setModalModifyTaskIsVisible(true);
      setInputModalModifyTask(taskClicked.description);
      setSelectModaModifyTask(taskClicked.importance);
      setTaskDoneOrNotDone(taskClicked.done)
      setTaskModify(taskClicked);
    }
  }

  const handleSubmitModal = event => {
    event.preventDefault();

    list.map(task => {
      if(task.id === taskModify.id){
        task.id = taskModify.id;
        task.date = taskModify.date;
        task.description = inputModalModifyTask;
        task.importance = Number(selectModalModifyTask);
        task.done = taskDoneOrNotDone;
        setTaskModify({});
      }
    });

    setModalModifyTaskIsVisible(false)
  }

  const toggleTaskDoneOrNotDone = () => {
    taskDoneOrNotDone ? setTaskDoneOrNotDone(false) : setTaskDoneOrNotDone(true)
  }

  const handleInputText = event => {
    setInputModalModifyTask(event.target.value);
  }

  const handleValueSelectImportance = event => {
    setSelectModaModifyTask(event.target.value);
  }

  //Lidando com estados do campo de pesquisa
  const [inputSearch, setInputSearch] = useState('');
  const [modeSearch, setModeSearch] = useState(false);
  const [listTasksSearched, setListTasksSearched] = useState([]);

  const DealingWithTasksSearch = () => {
    const listCopy = [...list];

    const tasksMatchSearch = listCopy.filter(task => {
      let descriptionTaskLowerCase = task.description.toLowerCase();
      let valueInputLowerCase = inputSearch.toLowerCase();

      if (descriptionTaskLowerCase.includes(valueInputLowerCase)) {
        return task;
      }
    })

    const OrderTasksMatchByImportance = tasksMatchSearch
      .sort((task1, task2) => task2.importance - task1.importance);

    setListTasksSearched(OrderTasksMatchByImportance);
  }

  const handleValueInputSearch = (event) => {
    const valueInput = event.target.value;
    setInputSearch(valueInput);
    setModeSearch(true);

    DealingWithTasksSearch();
  }

  //Lidando com mudança de temas
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    theme.title === "dark" ? setTheme(light) : setTheme(dark)
  }

  useEffect(() => {
    DealingWithTasksNotDone();
    DealingWithTasksDone();
    DealingWithTasksSearch();
  }, [list, taskModify])

  return (
    <TodoContext.Provider value={{
      //Lidando com a lista
      list,
      addItemList,
      removeItemList,
      toggleDoneTask,
      modifyTask,
      tasksDone,
      tasksNotDone,
      quantityTasksDone,
      //Lidando com estados da pesquisa
      handleValueInputSearch,
      inputSearch,
      setInputSearch,
      modeSearch,
      setModeSearch,
      listTasksSearched,
      //Lidando com modal de modificar a tarefa
      taskModify,
      modalModifyTaskIsVisible,
      inputModalModifyTask,
      selectModalModifyTask,
      handleSubmitModal,
      handleInputText,
      handleValueSelectImportance,
      setModalModifyTaskIsVisible,
      taskDoneOrNotDone,
      toggleTaskDoneOrNotDone,
      //Lidando com a mudança de tema
      toggleTheme,
      theme
    }}>
      {children}
    </TodoContext.Provider>
  );
} 