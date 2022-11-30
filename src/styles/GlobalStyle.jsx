import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.bgColor};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    
    background: ${({ theme }) => theme.title === 'light' ?
      '#20202030' : '#303030'
    };
  }
`