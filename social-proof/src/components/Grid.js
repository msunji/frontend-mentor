import styled from "styled-components";

export const Grid = styled.main`
  width: 85%;
  max-width: 900px;
  margin: calc(3 * var(--margin-y)) auto;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "main"
    "ratings"
    "testimonials";

  section {
    padding: var(--padding-y) 0;
  }
`;
