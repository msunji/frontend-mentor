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

  .monthly {
    &-subscription {
      background-color: var(--cyan);
      color: white;
    }
    &-price {
      display: flex;
      align-items: center;

      h3 {
        font-size: 2.1em;
        font-weight: 700;
        margin-right: 13px;
      }
      p {
        color: var(--transluscent-greyish-blue);
      }
    }
  }

  h1 {
    color: var(--cyan);
    font-weight: 700;
    font-size: 1.38em;
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: 700;
    font-size: 1.22em;
  }

  .highlight {
    color: var(--bright-yellow);
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
`;
