import React, { useState, useContext } from "react";
import { TodoContext } from "../../provider";

import imgSearchURL from '../../assets/search.png';
import imgCloseBlueURL from '../../assets/close-blue.png';
import imgSettingsURL from '../../assets/settings.png';

import {
  Container,
  Title,
  ContainerLeft,
  SectionFormSearch,
  ImgSearch,
  FormSearch,
  Settings,
  WrapperImgClose
} from "./style";

export const Header = () => {
  const {
    handleValueInputSearch,
    inputSearch,
    setModeSearch,
    setInputSearch
  } = useContext(TodoContext);
  
  const [formSearchIsVisible, setFormSearchIsVisible] = useState(false);

  async function showFormSearch() {
    await setFormSearchIsVisible(true);
    document.querySelector('.input').focus();
  }

  function hiddenFormSearch() {
    setFormSearchIsVisible(false);
    setModeSearch(false);
    setInputSearch('');
  }

  return (
    <Container>
      <ContainerLeft>
        <Title>To Do</Title>

        <SectionFormSearch>
          <ImgSearch
            onClick={showFormSearch}
            title='Pesquisar'
            alt="Pesquisar"
            src={imgSearchURL}
          />

          <FormSearch formIsVisible={formSearchIsVisible}>
            <input
              onChange={handleValueInputSearch}
              value={inputSearch}
              className="input"
              type="text"
              name="search"
            />

            <WrapperImgClose>
              <img
                onClick={hiddenFormSearch}
                title="Sair da pesquisa"
                alt="Sair da pesquisa"
                src={imgCloseBlueURL}
              />
            </WrapperImgClose>
          </FormSearch>
        </SectionFormSearch>
      </ContainerLeft>

      <Settings>
        <img
          title="Configurações"
          alt="Configurações"
          src={imgSettingsURL}>
        </img>
      </Settings>
    </Container>
  );
}