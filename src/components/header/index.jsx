import React, { useState, useContext } from "react";
import { TodoContext } from "../../provider";

import imgSearchURL from '../../assets/search.png';
import imgCloseBlueURL from '../../assets/close-blue.png';
import imgSettingsURL from '../../assets/settings.png';
import imgMoonURL from '../../assets/moon.png';
import imgSunURL from '../../assets/sun.png';

import {
  Container,
  Title,
  ContainerLeft,
  SectionFormSearch,
  ImgSearch,
  FormSearch,
  ContainerRight,
  WrapperImgClose
} from "./style";

export const Header = () => {
  const {
    handleValueInputSearch,
    inputSearch,
    setModeSearch,
    setInputSearch,
    theme,
    toggleTheme
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

      <ContainerRight>
        {theme.title === 'light' ? (
          <img
            title="Trocar tema"
            alt="lua"
            src={imgMoonURL}
            onClick={toggleTheme}
          />
        ) : (
          <img
            title="Trocar tema"
            alt="Sol"
            src={imgSunURL}
            onClick={toggleTheme}
          />
        )}
      </ContainerRight>
    </Container>
  );
}