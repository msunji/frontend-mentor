import React from 'react';
import styled from 'styled-components';
import { Container } from './layout';
// Import desktop and mobile versions
import HeroImgDesktop from '/public/img/desktop/image-header.jpg';
import HeroImgMobile from '/public/img/mobile/image-header.jpg';

// Import down arrow
import DownArrow from '/public/img/icon-arrow-down.svg';

// Import breakpoints
import breakpoints from '../styles/breakpoints';

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: var(--bright-blue) url(${props => props.mobile});
  background-size: 129%;
  background-position: bottom;
  background-repeat: no-repeat;
  padding-top: calc(6*var(--padding-y));

  .HeroText {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      font-weight: 900;
      line-height: 1.2;
      color: var(--white);
      text-transform: uppercase;
      letter-spacing: 8.75px;
      font-size: clamp(2.2rem, 1.9000rem + 1.5000vw, 3.1rem);
      margin-bottom: 5.4rem;
    }

    svg {
      color: var(--white);
      transform: scaleY(1.1);
    }
  }


  @media screen and ${breakpoints.lg} {
    background: var(--bright-blue) url(${props => props.desktop});
    background-size: 120%;
    background-repeat: no-repeat;
    background-position: bottom;
  }
`;

export const Hero = () => {
  return (
    <HeroSection desktop={HeroImgDesktop} mobile={HeroImgMobile}>
      <Container>
        <div className="HeroText">
          <h1>We are Creatives</h1>
          <DownArrow />
        </div>
      </Container>
    </HeroSection>
  )
}