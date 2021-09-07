import styled from "styled-components";

export const PriceGrid = styled.div`
  width: 85%;
  max-width: 1000px;
  background-color: white;
  color: var(--greyish-blue);
  margin: 2rem 0;
  border-radius: 8px;

  section {
    padding: var(--padding-y) var(--padding-x);
  }

  h1 {
    color: var(--cyan);
    font-weight: 700;
    font-size: 1.3em;
    margin-bottom: 1rem;
  }

  .highlight {
    color: var(--bright-yellow);
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
`;
