import styled from "styled-components";

export const Stats = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-flow: column wrap;

  .stat {
    flex: 1;
    text-align: center;

    :not(:last-of-type) {
      padding-bottom: 1.8rem;
    }

    h3 {
      color: var(--neutral-white);
      font-size: 2em;
      font-weight: 700;
      line-height: 1.2;
    }
    p {
      color: var(--neutral-white-headings);
      text-transform: uppercase;
    }
  }
`;
