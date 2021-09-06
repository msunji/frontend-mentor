import styled from "styled-components";

export const Card = styled.div`
  width: 85%;
  min-width: 300px;
  background-color: var(--primary-desat-blue);
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  .card-content {
    padding: var(--padding-y) var(--padding-x);
  }
`;
