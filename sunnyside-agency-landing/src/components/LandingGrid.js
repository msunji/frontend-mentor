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

// Import breakpoints
import breakpoints from '../styles/breakpoints';

const LandingGridSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 312px min-content 312px min-content repeat(
      2,
      minmax(33.3em, auto)
    );
  grid-remplate-rows: repeat(6, 1fr);
  grid-template-areas:
    'egg'
    'transform'
    'cup'
    'stand-out'
    'cherry'
    'orange';

  @media screen and ${breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr minmax(11em, 1fr);
    grid-template-areas:
      'transform egg'
      'cup stand-out'
      'cherry orange';
  }
`;

const GridSquare = styled.div`
  grid-area: ${(props) => props.gridName};

  h2 {
    color: var(--blue-black);
    font-size: 2em;
    line-height: 1.1;
    margin-bottom: 1.7rem;
    letter-spacing: -0.29px;
    font-weight: 900;
  }

  p {
    color: var(--blue-greyish-dark);
    margin-bottom: 1.8rem;
  }

  .grid-content {
    padding: calc(2*var(--padding-y)) var(--padding-x);
    text-align: center;
  }

  @media screen and ${breakpoints.lg} {
    .grid-content {
      text-align: left;
      padding: calc(2.5*var(--padding-y)) calc(2.5*var(--padding-x));
    }
  }
`;

const GridSquareBg = styled(GridSquare)`
  background: ${(props) => `var(--${props.color})`}
    url(${(props) => props.mobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;

  @media screen and ${breakpoints.lg} {
    background: ${(props) => `var(--${props.color})`}
      url(${(props) => props.desktop});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const GridSquareBgText = styled(GridSquareBg)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-position: center;
  background-repeat: no-repeat;

  .bgtext-content {
    width: 60%;
    text-align: center;
    padding-bottom: 1.5rem;

    h3 {
      font-size: 1.5em;
      letter-spacing: -0.2px;
      line-height: 1.25;
      margin-bottom: 1.2rem;
      color: ${(props) => `var(--${props.headerColor})`};
    }
    p {
      color: ${(props) => `var(--${props.textColor})`};
      opacity: 0.7;
      line-height: 1.7;
      font-size: 0.88em;
      letter-spacing: -0.11px;
    }
  }

  @media screen and ${breakpoints.lg} {
    .bgtext-content-container {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

const GridLink = styled.a`
  font-family: var(--fraunces);
  text-transform: uppercase;
  font-size: 0.83em;
  font-weight: 900;
  letter-spacing: 1px;
  color: var(--blue-black);
  text-decoration: none;
  position: relative;
  padding-left: 7.5px;

  &:hover,
  &:active {
    &::before {
      opacity: 0.25;
      transition: opacity 1s ease;
    }

    &::after {
      width: 108%;
      transition: all 0.4s ease;
    }
  }

  &::before {
    position: absolute;
    left: 0;
    top: 0.83em;
    content: '';
    width: 108%;
    height: 10px;
    z-index: -2;
    background: ${(props) => `var(--${props.color})`};
    opacity: 0.25;
    border-radius: 28px;
    transition: opacity 0.4s ease;
  }

  &::after {
    position: absolute;
    left: 0;
    top: 0.83em;
    content: '';
    width: 0%;
    height: 10px;
    z-index: -1;
    background: ${(props) => `var(--${props.color})`};
    opacity: 1;
    border-radius: 28px;
    transition: all 0.4s ease;
  }
`;

export const LandingGrid = () => {
  return (
    <LandingGridSection>
      <GridSquare gridName="transform">
        <div className="grid-content">
          <h2>
            Transform your
            <br />
            brand
          </h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <GridLink color="yellow" href="#">
            Learn More
          </GridLink>
        </div>
      </GridSquare>
      <GridSquareBg
        gridName="egg"
        color="yellow"
        desktop={EggBgDesktop}
        mobile={EggBgMobile}
      ></GridSquareBg>
      <GridSquareBg
        gridName="cup"
        color="red-soft"
        desktop={CupBgDesktop}
        mobile={CupBgMobile}
      ></GridSquareBg>
      <GridSquare gridName="stand-out">
        <div className="grid-content">
          <h2>
            Stand out to the right
            <br />
            audience
          </h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend yourbrand in digital places.
          </p>
          <GridLink color="red-soft" href="#">
            Learn More
          </GridLink>
        </div>
      </GridSquare>
      <GridSquareBgText
        gridName="cherry"
        headerColor="cyan-dark-desat"
        textColor="cyan-dark-desat"
        color="cyan"
        desktop={CherryBgDesktop}
        mobile={CherryBgMobile}
      >
        <div className="bgtext-content">
          <h3>Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </GridSquareBgText>
      <GridSquareBgText
        gridName="orange"
        headerColor="blue-dark"
        textColor="blue-dark"
        color="bright-blue"
        desktop={OrangeBgDesktop}
        mobile={OrangeBgMobile}
      >
        <div className="bgtext-content">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </GridSquareBgText>
    </LandingGridSection>
  );
};
