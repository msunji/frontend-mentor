import styled from "styled-components";

export const Grid = styled.main`
  width: 85%;
  max-width: 900px;
  // border: 1px solid red;
  margin: calc(3 * var(--margin-y)) auto;
  display: grid;
  grid-template-rows: repeat(3, auto);
`;
