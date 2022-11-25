import React, { useContext } from "react";
import { TodoContext } from "../../provider";
import { Header } from "../header";
import { TodoForm } from "../TodoForm";
import { List } from "../list";
import { SearchedTasks } from "../searchedTasks";

export function Page() {
  const { modeSearch } = useContext(TodoContext)

  return (
    <section>
      <Header />
      
      {modeSearch ? (
        <>
          <SearchedTasks />
        </>
      ) : (
        <>
          <TodoForm />
          <List />
        </>
      )}
    </section>
  );
}
