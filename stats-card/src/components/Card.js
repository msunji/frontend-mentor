import styled from 'styled-components';
import device from '../styles/breakpoints';

export const Card = styled.main`
  width: 85%;
  min-width: 300px;
  max-width: 1000px;
  background-color: var(--primary-desat-blue);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 4rem;

  .card-content {
    padding: var(--padding-y) var(--padding-x);
  }

  @media screen and ${device.sm} {
    flex-direction: row-reverse;

    .card-content {
      padding-top: var(--padding-y);
      padding-bottom: var(--padding-y);
      padding-left: var(--padding-x);
      padding-right: var(--padding-x);
      flex: 0 0 50%;
      min-width: 0;
    }
  }
`;
