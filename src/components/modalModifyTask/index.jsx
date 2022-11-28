import React from "react";

import { 
  Card, 
  Container, 
  SelectedImportanceTask, 
  Button, 
  InputTask,
  ContainerInputText,
  ContainerSelectImportance
} from "./style";

export const ModalModifyTask = () => {
  return (
    <Container>
      <Card>
        <ContainerInputText>
          <label>Descrição</label>
          <InputTask type='text' placeholder="Texto da Tarefa" />
        </ContainerInputText>

        <ContainerSelectImportance>
          <label>Importância</label>
          <SelectedImportanceTask
            name="importance"
            // onChange={handleValueSelectImportance}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </SelectedImportanceTask>
        </ContainerSelectImportance>

        <Button>Mudar Tarefa</Button>
      </Card>
    </Container>
  );
}