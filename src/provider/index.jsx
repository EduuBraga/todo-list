import React, { useState, createContext } from "react";
import { useEffect } from "react";

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
    const listCopy = [...list]

    const filteredList = listCopy
      .filter(itemList => itemList.id !== idElementClicked)

    setList(filteredList)
  }

  const toggleDoneTask = idElementClicked => {
    const listCopy = [...list]

    const ReversingDoneItem = listCopy.map(itemList => {
      if (itemList.id === idElementClicked) {
        itemList.done = !itemList.done
      }

      return itemList
    })

    setList(ReversingDoneItem)
  }

  const DealingWithTasksNotDone = () => {
    const filteredTasksNotDone = list.filter(task => !task.done)

    const orderTasksNotDoneByImportance = filteredTasksNotDone
      .sort((task1, task2) => task2.importance - task1.importance)

    setTasksNotDone(orderTasksNotDoneByImportance)
  }

  const DealingWithTasksDone = () => {
    const filteredTasksDone = list.filter(task => task.done)

    const orderTaskDoneByImportance = filteredTasksDone
      .sort((task1, task2) => task2.importance - task1.importance)

    setTasksDone(orderTaskDoneByImportance)
    setQuantityTasksDone(filteredTasksDone.length)
  }

  useEffect(() => {
    DealingWithTasksNotDone()
    DealingWithTasksDone()
  }, [list])

  //Lidando com estados da pesquisa
  const [inputSearch, setInputSearch] = useState('')
  const [modeSearch, setModeSearch] = useState(false)
  const [listTasksSearched, setListTasksSearched] = useState([])

  const handleValueInputSearch = (event) => {
    const valueInput = event.target.value
    setInputSearch(valueInput)
    setModeSearch(true)

    const listCopy = [...list]

    const tasksMatchSearch = listCopy.filter(task => {
      let descriptionTask = task.description.toLowerCase()
      let valueInputLower = valueInput.toLowerCase()

      if (descriptionTask.includes(valueInputLower)) {
        return task
      }
    })

    setListTasksSearched(tasksMatchSearch)
  }

  return (
    <TodoContext.Provider value={{
      list,
      addItemList,
      removeItemList,
      toggleDoneTask,
      tasksDone,
      tasksNotDone,
      quantityTasksDone,
      handleValueInputSearch,
      inputSearch,
      setInputSearch,
      modeSearch,
      setModeSearch,
      listTasksSearched
    }}>
      {children}
    </TodoContext.Provider>
  );
} 