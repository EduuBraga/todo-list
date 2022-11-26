import styled from "styled-components";

export const Container = styled.section`
  margin: 0px auto;
  margin-bottom: 15px;
`

export const Form = styled.form`
  margin: 0 auto;
  display: grid;
  grid: auto / 1fr auto auto;
  gap: 5px;
  width: 95vw;
`

export const InputTask = styled.input`
  padding: 15px;
  border: none;
  border-radius: 4px;
  box-shadow: #ccc 0px 1px 3px 0px;
  background-color: #f7f7f7;
  outline: none;

  &::placeholder{
    color: #3071e1;
  }

  &:focus::placeholder {
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
  color: #3071e1;

  &:focus{
    color: #303030;
  }

  option{
    border: none;
  }
`

export const ButtonForm = styled.button`
  cursor: ${({isClickable}) => isClickable ? 'pointer' : 'not-allowed'};
  border-radius: 4px;
  color: ${({isClickable}) => isClickable ? '#3071e1' : '#30303080'};
  border: none;
  padding: 0px 10px;
  background-color: #f7f7f7;
  box-shadow: #dcd 0px 1px 3px 0px;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background-color: ${({isClickable}) => isClickable ? '#efefef' : ''};
  }
`