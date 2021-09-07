import styled from "styled-components";

export const PriceGrid = styled.div`
  width: 85%;
  max-width: 800px;
  background-color: white;
  color: var(--greyish-blue);
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: 1px 3px 16px 0px rgb(2 110 194 / 20%);
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: auto;
  grid-template-areas:
    "main"
    "subscription"
    "about";

  section {
    padding: var(--padding-y) var(--padding-x);
  }

  .main-text {
    flex: 100%;
    grid-area: main;
  }

  .monthly {
    &-subscription {
      grid-area: subscription;
      background-color: var(--cyan);
      color: white;

      > p {
        margin-bottom: 1.5rem;
      }
    }
    &-price {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;

      h3 {
        font-size: 2.1em;
        font-weight: 700;
        margin-right: 13px;
        line-height: 1;
      }
      p {
        color: #ffffffb0;
      }
    }
  }

  .about {
    grid-area: about;
    background-color: var(--lighter-cyan);
    color: white;
    border-radius: 0 0 8px 8px;

    li {
      line-height: 1.5;
      font-size: 0.96em;
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
    margin-bottom: 1rem;
  }

  .highlight {
    color: var(--bright-yellow);
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 500px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: 50% 50%;
    grid-template-areas:
      "main main"
      "subscription about";

    .monthly-subscription {
      border-radius: 0 0 0 8px;
    }

    .about {
      border-radius: 0 0 8px 0;
    }
  }
`;
