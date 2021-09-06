import styled from 'styled-components';
import device from '../styles/breakpoints';

export const HeaderImg = styled.div`
  background-color: var(--primary-violet);
  background: url('/assets/img/image-header-mobile.jpg') hsl(277, 64%, 61%);
  background-size: cover;
  background-repeat: no-repeat;
  flex: 0 0 200px;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  background-blend-mode: multiply;

  @media screen and ${device.sm} {
    flex-direction: row-reverse;
    height: auto;
    background: url('/assets/img/image-header-desktop.jpg') hsl(277, 64%, 61%);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0 8px 8px 0;
    flex: 0 0 50%;
  }
`;
