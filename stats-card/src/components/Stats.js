import styled from 'styled-components';
import device from '../styles/breakpoints';

export const Stats = styled.div`
  display: flex;
  flex-flow: column;

  .stat {
    flex: 1;
    text-align: center;

    :not(:last-of-type) {
      padding-bottom: 1.8rem;
    }

    h3 {
      color: var(--neutral-white);
      font-size: 1.5em;
      font-weight: 700;
      line-height: 1.2;
    }
    p {
      font-size: 0.85em;
      letter-spacing: 1px;
      color: var(--neutral-white-headings);
      text-transform: uppercase;
      font-family: var(--font-lexend);
    }
  }

  @media screen and ${device.sm} {
    flex-direction: row;

    .stat {
      text-align: left;
      :not(:last-of-type) {
        padding-bottom: 0;
      }
    }
  }
`;
