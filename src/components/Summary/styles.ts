import styled, { css } from "styled-components";

interface CardsProps {
  type: 'total' | 'desejo' | 'venda'
}

export const Container = styled.div`
  max-width: 66.875rem;
  margin: auto;
  padding-top: 2rem;
`

export const CardContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

export const Card = styled.div<CardsProps>`
  padding: 1.5rem;
  background-color: ${props => props.theme["gray-600"]};
  text-align: center;

  strong {
    margin-right: 1rem;
  }

  span {
    ${props => props.type === "desejo" && css`
      color: ${props.theme["red-300"]};
    `}

    ${props => props.type === "total" && css`
      color: ${props.theme["green-300"]};
    `}

    ${props => props.type === "venda" && css`
      color: ${props.theme["yellow-300"]};
    `}
  }
`