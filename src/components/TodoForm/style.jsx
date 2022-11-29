import styled from "styled-components";

export const Container = styled.section`
  margin: 0px auto;
  margin-bottom: 15px;
`

export const Form = styled.form`
  margin: 0 auto;
  display: grid;
  grid: auto / 1fr auto auto;
  gap: 8px;
  width: 95vw;
`

export const InputTask = styled.input`
  padding: 15px;
  border: none;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadowColor} 0px 1px 3px 0px;
  background-color: ${({ theme }) => theme.bgColorSecondary};
  color: ${({ theme }) => theme.colorText};
  outline: none;
  font-weight: 500;

  &::placeholder{
    color: ${({ theme }) => theme.colorMain};
  }

  &:focus::placeholder {
    color: ${({ theme }) => theme.colorText};
  }
`

export const SelectedImportanceTask = styled.select`
  padding: 10px; 
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadowColor} 0px 1px 3px 0px;
  background-color: ${({ theme }) => theme.bgColorSecondary};
  font-size: 13px;
  color: #3071e1;
  cursor: pointer;
  font-weight: 500;

  &:focus{
    color: ${({ theme }) => theme.colorText};
  }
`

export const ButtonForm = styled.button`
  cursor: ${({ isClickable }) => isClickable ? 'pointer' : 'not-allowed'};
  border-radius: 4px;
  color: ${({ isClickable }) => isClickable ? '#3071e1' : ({theme}) => theme.colorText + '90'};
  border: none;
  padding: 0px 10px;
  background-color: ${({theme}) => theme.bgColorSecondary};
  box-shadow: ${({theme}) => theme.boxShadowColor} 0px 1px 3px 0px;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ isClickable }) =>
      isClickable ? ({ theme }) => theme.bgColorSecondary : ''
    };
  }
`