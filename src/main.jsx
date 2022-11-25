import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoProvider } from './provider';
import { Page } from './components/Page/index';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <Page />
    <GlobalStyle />
  </TodoProvider>
)
