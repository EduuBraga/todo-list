import React, { useState, createContext } from "react";
import { useEffect } from "react";

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);
  const [tasksNotDone, setTasksNotDone] = useState([]);
  const [idTask, setIdTask] = useState(0);
  const [quantityTasksDone, setQuantityTasksDone] = useState(0);

  const addItemList = (descriptionTask, dateTask) => {
    const task = {
      id: idTask,
      description: descriptionTask,
      date: dateTask,
      done: false,
      important: false
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

  useEffect(() => {
    const FilteredTasksDone = list.filter(task => task.done === true)
    const FilteredTasksNotDone = list.filter(task => task.done === false)

    setTasksDone(FilteredTasksDone)
    setTasksNotDone(FilteredTasksNotDone)
    setQuantityTasksDone(FilteredTasksDone.length)
    console.log(list)
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