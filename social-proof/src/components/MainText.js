import styled from "styled-components";

const Text = styled.section`
  text-align: center;
  h1 {
    font-weight: 700;
    color: var(--magenta-dark);
    font-size: 2em;
    line-height: 1.2;
  }
  p {
    line-height: 1.8;
  }
`;

export const MainText = () => {
  return (
    <Text>
      <h1>10,000+ of our users love our products.</h1>
      <p>
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
    </Text>
  );
};
