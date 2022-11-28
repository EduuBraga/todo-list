import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #20202090;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.form`
  background-color: #f3f2f1;
  padding: 40px 18px 24px 18px;
  border-radius: 8px;
  min-width: 350px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`

export const ContainerInputText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100% ;

  label{
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #303030;
  }
`

export const InputTask = styled.input`
  padding: 15px;
  border: none;
  border-radius: 4px;
  box-shadow: #ccc 0px 1px 3px 0px;
  background-color: #f7f7f7;
  outline: none;
  color: #303030;
`

export const ContainerSelectImportance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100% ;

  label{
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #303030;
  }
`

export const SelectedImportanceTask = styled.select`
  padding: 10px; 
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: #ccc 0px 1px 3px 0px;
  background-color: #f7f7f7;
  font-size: 13px;
  color: #303030;
  cursor: pointer;
`

export const Button = styled.button`
  cursor: pointer;
  /* align-self: flex-end; */
  border-radius: 4px;
  color: #3071e1;
  border: none;
  padding: 12px 10px;
  background-color: #f7f7f7;
  box-shadow: #dcd 0px 1px 3px 0px;
  font-weight: 500;
  transition: background 0.3s;

  &:hover{
    background-color: #efefef;
  }
`

export const ImgClose = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  &:active{
    transform: scale(0.90);
  }
`