import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${({theme}) => theme.bgColorTertiary};
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid ${({theme}) => theme.borderBottom};
`

export const Title = styled.h1`
  margin: 10px 5px 10px 35px;
  color: #f5f5f5;
  font-size: 20px;
`

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const SectionFormSearch = styled.section`
  background-color: ${({theme}) => theme.bgColorSecondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:5px;
  border-radius: 4px;
  transition:all 0.3s ease;

  &:hover{
    transform: scale(1.010);
  }
`

export const ImgSearch = styled.img`
  width: 30px;
  height: 30px;
  background-color: ${({theme}) => theme.bgColorSecondary};
  padding: 7px;
  border-radius: 4px;
  cursor: pointer;
  transition:all 0.3s ease;
`

export const FormSearch = styled.form`
  display: ${({formIsVisible}) => formIsVisible ? 'grid' : 'none'};
  grid-template: auto/ 85% 15%;
  animation: mostrarSearch 1s ease-in-out;

  input{
    background-color: ${({theme}) => theme.bgColorSecondary};
    border:none ;
    outline: none;
    padding: 6px 5px;
  }
`

export const WrapperImgClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    height: 12px;
    border-radius: 5px;
    cursor: pointer;
  }
`

export const Settings = styled.div`
  width: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0px;

  &:hover{
    background-color: #55555590;
  }

  img{
    width: 18px;
    height: 18px;
    padding: 0px;
  }
`