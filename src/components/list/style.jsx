import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 45px;
`

export const ListTasksNotDone = styled.ul`
  margin: 0 auto;
  width: 95vw;
  padding: 0px;
  list-style: none;
`

export const ListTasksDone = styled.ul`
  margin: 0 auto;
  width: 95vw;
`

export const HeaderListTasksDone = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  color: ${({theme}) => theme.colorText};
  padding: 8px 12px 8px 0px;
  border-bottom-color: ${({theme}) => theme.borderBottom};
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  border-bottom: ${({ tasksDoneisVisible }) =>
    tasksDoneisVisible === true ? 'none' : ''
  };

  h4{
    font-size: 14px;
    font-weight: 600;
  }

  img{
    transform: rotate( ${({ tasksDoneisVisible }) =>
      tasksDoneisVisible === true ? '90deg' : '0deg'
    });
    transition: all 0.3s;
    width: 18px;
  }
`