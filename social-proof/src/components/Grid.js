import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

export const Grid = styled.div`
  width: 85%;
  max-width: 1110px;
  margin: calc(3 * var(--margin-y)) auto;
  // padding: 0 var(--padding-x);
  display: grid;
  gap: 2rem;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "main"
    "ratings"
    "testimonials";

  section {
    padding: calc(var(--padding-y) / 2) 0;
  }

  @media screen and ${breakpoints.lg} {
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      "main"
      "ratings"
      "testimonials testimonials";
  }
  @media screen and ${breakpoints.xl} {
    grid-template-columns: 1.8fr 2fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "main ratings"
      "testimonials testimonials";
  }
`;
