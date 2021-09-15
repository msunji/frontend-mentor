import React from 'react';
import styled from 'styled-components';
// Import desktop version of images
import EggBgDesktop from '/public/img/desktop/image-transform.jpg';
import CupBgDesktop from '/public/img/desktop/image-stand-out.jpg';
import CherryBgDesktop from '/public/img/desktop/image-graphic-design.jpg';
import OrangeBgDesktop from '/public/img/desktop/image-photography.jpg';
// Import mobile version of images
import EggBgMobile from '/public/img/mobile/image-transform.jpg';
import CupBgMobile from '/public/img/mobile/image-stand-out.jpg';
import CherryBgMobile from '/public/img/mobile/image-graphic-design.jpg';
import OrangeBgMobile from '/public/img/mobile/image-photography.jpg';


const LandingGridSection = styled.section`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
`;

const GridSquare = styled.div`
  height: 0;
  padding-bottom: 83%;
  h2 {
    color: var(--blue-black);
    font-size: 2.2em;
    line-height: 1.2;
    margin-bottom: 2rem;
    letter-spacing: -0.29px;
  }

  p {
    color: var(--blue-greyish-dark);
  }
  // aspect-ratio property works a treat, but has no IE support
  // aspect-ratio: 1.2;
`;

const GridSquareBg = styled(GridSquare)`
  background: ${props => `var(--${props.color})`} url(${props => props.mobile});
  background-size: cover;
`;

const GridLink = styled.a`
  font-family: var(--fraunces);
  text-transform: uppercase;
`;

export const LandingGrid = () => {
  return (
    <LandingGridSection>
      <GridSquare>
        <h2>Transform your<br />brand</h2>
        <p>We are a full-service creative agency specializing
        in helping brands grow fast. Engage your clients through compelling
        visuals that do most of the marketing for you.</p> 
        <GridLink href="">Learn More</GridLink>
      </GridSquare>
      <GridSquareBg color="yellow" desktop={EggBgDesktop} mobile={EggBgMobile}>
      </GridSquareBg>
      <GridSquareBg color="red-soft" desktop={CupBgDesktop} mobile={CupBgMobile}></GridSquareBg>
      <GridSquare>
        <h2>Stand out to the right<br />audience</h2> 
        <p>Using a collaborative formula of
        designers, researchers, photographers, videographers, and copywriters,
        we’ll build and extend yourbrand in digital places.</p> 
        <GridLink href="">Learn More</GridLink>
      </GridSquare>
      <GridSquareBg color="cyan" desktop={CherryBgDesktop} mobile={CherryBgMobile}>
        <h3>Graphic design</h3>
        <p>Great design makes you memorable. We deliver artwork that
        underscores your brand message and captures potential clients’
        attention.</p>
      </GridSquareBg>
      <GridSquareBg color="bright-blue" desktop={OrangeBgDesktop} mobile={OrangeBgMobile}>
        <h3>Photography</h3> Increase your credibility by getting the most stunning,
        high-quality photos that improve your business image.
      </GridSquareBg>
    </LandingGridSection>
  );
};
