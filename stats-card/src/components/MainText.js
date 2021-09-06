import styled from 'styled-components';
import device from '../styles/breakpoints';

export const MainText = styled.div`
  text-align: center;
  h1 {
    color: var(--neutral-white);
    margin-bottom: 1.5rem;
  }
  .highlight {
    color: var(--primary-violet);
  }
  p {
    margin-bottom: var(--padding-y);
  }

  @media screen and ${device.sm} {
    text-align: left;

    p {
      padding-bottom: calc;
    }
  }
`;
