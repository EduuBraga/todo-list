import styled from 'styled-components'

export const Container = styled.header`
  background-color: #3071e1;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  /* padding: 4px 0px; */
`

export const Title = styled.h1`
  margin: 10px 5px 10px 15px;
  color: white;
  font-size: 20px;
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SectionFormSearch = styled.section`
  background-color: #fff;
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
  background-color: #fafafa;
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
    background-color: rgba(0, 0, 0, 0.221);
  }

  img{
    width: 21px;
    height: 21px;
    padding: 0px;
  }
`