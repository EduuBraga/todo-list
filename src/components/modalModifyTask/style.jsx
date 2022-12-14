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
  background-color: ${({theme}) => theme.bgColor};
  border-radius: 8px;
  width: 500px;
  position: relative;
  margin: 0px 12px;
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

  @media screen and (max-width: 500px){
    padding: 20px;
  }

  img{
    width: 17px;
    height: 17px;
    cursor: pointer;

    &:active{
      transform: scale(0.90);
    }
  }

  h2{
    font-size: 1.5em;
    color: ${({theme}) => theme.colorText};

    @media screen and (max-width: 500px){
      font-size: 1.3em;
    }
  }
`

export const ContainerInputText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  gap: 4px;
  width: 100% ;

  @media screen and (max-width: 500px){
    padding: 10px 20px;
  }

  label{
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.7px;
    color: ${({theme}) => theme.colorText};
  }
`

export const InputTask = styled.input`
  padding: 15px;
  border: none;
  border-radius: 4px;
  box-shadow: ${({theme}) => theme.boxShadowColor} 0px 1px 3px 0px;
  background-color: ${({theme}) => theme.bgColorSecondary};
  outline: none;
  color: ${({theme}) => theme.colorText};
  font-weight: 500;
`

export const ContainerSelectImportance = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  gap: 4px;
  width: 100% ;

  @media screen and (max-width: 500px){
    padding: 10px 20px;
  }

  label{
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${({theme}) => theme.colorText};
  }
`

export const SelectedImportanceTask = styled.select`
  padding: 15px;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: ${({theme}) => theme.boxShadowColor} 0px 1px 3px 0px;
  background-color: ${({theme}) => theme.bgColorSecondary};
  font-size: 13px;
  color: ${({theme}) => theme.colorText};
  font-weight: 500;
  cursor: pointer;
`

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 10px 30px 40px 30px;

  @media screen and (max-width: 500px){
    padding: 10px 20px 30px 20px;
  }

  div{
    display: flex;
    gap: 12px;

    p{
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: ${({theme}) => theme.colorText};
    }

    img{
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
  }
`

export const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  color: ${({theme}) => theme.colorMain};
  border: none;
  padding: 12px 10px;
  background-color: ${({theme}) => theme.bgColorSecondary};
  box-shadow: ${({theme}) => theme.boxShadowColor} 0px 1px 3px 0px;
  font-weight: 500;
  transition: background 0.3s;

  &:hover{
    background-color: ${({theme}) => theme.hoverButtonColor};
  }
`