import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoProvider } from './provider';
import { Page } from './components/Page/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <Page />
  </TodoProvider>
)
