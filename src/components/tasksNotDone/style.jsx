import styled, { keyframes } from 'styled-components';

const moveUpDown = keyframes`
  0% {
    bottom: 40px;
  }100% {
    bottom: 0;
  }
`

export const Container = styled.li`
  display: grid;
  grid-template: auto / auto 1fr auto;
  align-items: center;
  gap: 2px;

  margin: 7px 0px;
  padding: 10px;
  box-shadow: #dcd 0px 1px 3px 0px;
  color: #404040;
  border-radius: 4px;
  background-color: #f7f7f7;
  font-size: 15px;
  
  overflow-wrap: break-word;  
  word-wrap: break-word; 
  word-break: break-word;

  text-decoration: ${({ taskDone }) => taskDone ? 'line-through' : ''};  
  animation: ${moveUpDown} 0.3s ease;
  transition: background 0.2s;
  position: relative;

  &:hover {
    background-color: #efefef;
  }
`

export const ButtonCheck = styled.button`
  border: none;
  padding: 3px 10px 0px 5px;
  background-color: #00000000;
  cursor: pointer;

  img:nth-child(1){
    cursor: pointer;
    position: absolute;
    opacity: 1;
    z-index: 1;
    transition: all 400ms ease;

    &:active{
      transform: scale(0.95);
    }

    &:hover{
      opacity: 0;
    }
  }
  img:nth-child(2){
    cursor: pointer;

    &:active{
      transform: scale(0.95);
    }
  }

  img {
    width: 17px;
    height: 17px;
  }
`

export const ButtonTrash = styled.button`
  background-color: #00000000;
  border: none;
  cursor: pointer;

  img:nth-child(1){
    cursor: pointer;
    position: absolute;
    opacity: 1;
    z-index: 1;
    transition: all 400ms ease;

    &:active{
      transform: scale(0.95);
    }

    &:hover{
      opacity: 0;
    }
  }
  img:nth-child(2){
    cursor: pointer;

    &:active{
      transform: scale(0.95);
    }
  }

  img {
    width: 25px;
    height: 25px;
  }
`