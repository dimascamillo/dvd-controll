import { Card, CardContainer, Container } from "./styles";

export function Summary() {
  return(
    <Container>
      <CardContainer>
        <Card type="total">
          <strong>Total de DVD's:</strong>
          <span>1000</span>
        </Card>

        <Card type="desejo">
          <strong>Lista de desejos:</strong>
          <span>100</span>
        </Card>

        <Card type="venda">
          <strong>DVD's à venda:</strong>
          <span>100</span>
        </Card>
      </CardContainer>
    </Container>
  );
}