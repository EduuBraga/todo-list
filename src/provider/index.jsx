import React, { useState, createContext, useEffect } from "react";
import { dark, light } from "../styles/themes";

export const TodoContext = createContext();

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
    const { tagName } = event.target

    const tagsNoShootEvent = ['IMG', 'BUTTON']
    const shotEvent = !tagsNoShootEvent.includes(tagName)

    if (shotEvent) {
      const listCopy = [...list];

      const taskClicked = listCopy
        .filter(task => task.id === idElementClicked)[0];

      setModalModifyTaskIsVisible(true);
      setInputModalModifyTask(taskClicked.description);
      setSelectModaModifyTask(taskClicked.importance);
      setTaskDoneOrNotDone(taskClicked.done)
      setTaskModify(taskClicked);
    }
  }

  const handleSubmitModal = event => {
    event.preventDefault();

    taskModify.description = inputModalModifyTask;
    taskModify.importance = Number(selectModalModifyTask);
    taskModify.done = taskDoneOrNotDone;
    setTaskModify({});

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
    });

    const OrderTasksMatchByImportance = tasksMatchSearch
      .sort((task1, task2) => task2.importance - task1.importance);

    setListTasksSearched(OrderTasksMatchByImportance);
  }

  const handleValueInputSearch = event => {
    setInputSearch(event.target.value);
    setModeSearch(true);
    DealingWithTasksSearch();
  }

  //Lidando com mudança de temas
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    theme.title === "dark" ? setTheme(light) : setTheme(dark);
  }

  //Buscando estados salvos na memória local
  useEffect(() => {
    const listSaved = JSON.parse(localStorage.getItem('list'));
    if (listSaved !== null) setList(listSaved);

    const themeSaved = JSON.parse(localStorage.getItem('theme'));
    if (themeSaved !== null) setTheme(themeSaved);

    if (listSaved.length >= 1) {
      const maxIdTask = listSaved.reduce(function (prev, task) {
        return (prev.id > task.id) ? prev.id : task.id;
      }, 0);

      setIdTask(maxIdTask + 1);
    }
  }, [])

  // Ordenando a lista sempre quando mexida & Salvando itens na memória.
  useEffect(() => {
    DealingWithTasksNotDone();
    DealingWithTasksDone();
    DealingWithTasksSearch();

    localStorage.setItem('list', JSON.stringify(list));
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [list, taskModify, theme]);

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