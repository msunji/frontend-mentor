import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

export const Grid = styled.main`
  width: 85%;
  max-width: 1110px;
  margin: calc(3 * var(--margin-y)) auto;
  padding: 0 var(--padding-x);
  display: grid;
  gap: 3rem;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "main"
    "ratings"
    "testimonials";

  section {
    padding: var(--padding-y) 0;
  }

  @media screen and ${breakpoints.lg} {
    grid-template-columns: 1.4fr 2fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "main ratings"
      "testimonials testimonials";
  }
`;
