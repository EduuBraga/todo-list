import styled, { keyframes } from 'styled-components';

const moveUpDown = keyframes`
  0% {
    bottom: 40px;
  }100% {
    bottom: 0;
  }
`

export const ItemDone = styled.li`
  display: grid;
  grid-template: auto / auto 1fr auto;
  align-items: center;
  gap: 2px;

  cursor: pointer;
  margin: 7px 0px;
  padding: 10px;
  box-shadow: ${({theme}) => theme.boxShadowColor} 0px 1px 3px 0px;
  color: ${({theme}) => theme.colorText};
  border-radius: 4px;
  background-color: ${({theme}) => theme.bgColorSecondary};
  
  overflow-wrap: break-word;  
  word-wrap: break-word; 
  word-break: break-word;
 
  animation: ${moveUpDown} 0.3s ease;
  transition: background 0.2s;
  position: relative;

  &:hover {
    background-color: ${({theme}) => theme.hoverButtonColor};
  }
`

export const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & > p{
    text-decoration: ${({ taskDone }) => taskDone ? 'line-through' : ''}; 
  }
`

export const StatusTask = styled.div`
 display: flex;
  gap: 10px;
  text-align: center;
  font-size: 12px;

  p:nth-child(2){
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    font-weight: 600;

    img{
      width: 10px;
    }
  }
`

export const ButtonCheck = styled.button`
  border: none;
  padding: 3px 10px 0px 5px;
  background-color: #00000000;
  cursor: pointer;

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