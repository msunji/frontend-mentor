import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

const TextSection = styled.div`
  text-align: center;
  h1 {
    font-weight: 700;
    color: var(--magenta-dark);
    font-size: clamp(2.2rem, 1.5162rem + 2.973vw, 3.3rem);
    line-height: 1.05;
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 1.75;
    color: var(--grey-magenta-dark);
  }
  grid-area: main;

  @media screen and ${breakpoints.lg} {
    text-align: left;
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
