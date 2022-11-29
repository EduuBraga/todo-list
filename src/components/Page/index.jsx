import React, { useContext } from "react";
import { TodoContext } from "../../provider";
import { Header } from "../header";
import { TodoForm } from "../TodoForm";
import { List } from "../list";
import { SearchedTasks } from "../searchedTasks";
import { ModalModifyTask } from '../modalModifyTask';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from '../../styles/GlobalStyle';

export function Page() {
  const { modeSearch, modalModifyTaskIsVisible, theme } = useContext(TodoContext);

  return (
    <ThemeProvider theme={theme}>
      <section>
        <Header />

        <main>
          {modeSearch ? (
            <SearchedTasks />
          ) : (
            <>
              <TodoForm />
              <List />
            </>
          )}
        </main>

        {modalModifyTaskIsVisible && <ModalModifyTask />}
      </section>

      <GlobalStyle />
    </ThemeProvider>
  );
}
