import styled, { keyframes } from 'styled-components';

const OpacityAnimation = keyframes`
  0%{
    opacity: 0.3;
  }100%{
    opacity: 1;
  }
`

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
  border-radius: 8px;
  width: 500px;
  position: relative;
  animation: ${OpacityAnimation} 0.3s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const ContainerTop = styled.div`
  width: 100%;
  display: flex;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #90909040;

  img{
    width: 15px;
    height: 15px;
    cursor: pointer;

    &:active{
      transform: scale(0.90);
    }
  }

  h2{
    font-size: 1.5em;
    color: #303030;
  }
`

export const ContainerInputText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px 18px 30px;
  gap: 4px;
  width: 100% ;

  label{
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.7px;
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
  color: #101010;
  font-weight: 500;
`

export const ContainerSelectImportance = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px 18px 30px;
  gap: 4px;
  width: 100% ;

  label{
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #303030;
  }
`

export const SelectedImportanceTask = styled.select`
  padding: 15px;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: #ccc 0px 1px 3px 0px;
  background-color: #f7f7f7;
  font-size: 13px;
  color: #101010;
  font-weight: 500;
  cursor: pointer;
`

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 10px 30px 18px 30px;

  div{
    display: flex;
    gap: 12px;

    p{
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #303030;
    }

    img{
      width: 17px;
      height: 17px;
    }
  }
`

export const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  color: #3071e1;
  border: none;
  padding: 12px 10px;
  background-color: #f7f7f7;
  box-shadow: #dcd 0px 1px 3px 0px;
  font-weight: 500;
  transition: background 0.3s;

  &:hover{
    background-color: #eff1fa;
  }
`