import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

const TextSection = styled.section`
  text-align: center;
  h1 {
    font-weight: 700;
    color: var(--magenta-dark);
    font-size: 2em;
    line-height: 1;
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 1.75;
  }
  grid-area: main;

  @media screen and ${breakpoints.lg} {
    text-align: left;
    h1 {
      font-size: 3em;
    }
  }
`;

export const MainText = () => {
  return (
    <TextSection>
      <h1>10,000+ of our users love our products.</h1>
      <p>
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
    </TextSection>
  );
};
