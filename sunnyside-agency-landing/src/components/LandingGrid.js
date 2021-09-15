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
  position: relative;
  padding-bottom: 83%;
  height: 0;

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

  .content-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .content {
      width: 70%;
    }
  }
  // aspect-ratio property works a treat, but has no IE support
  // aspect-ratio: 1.2;
`;

const GridSquareBg = styled(GridSquare)`
  background: ${(props) => `var(--${props.color})`}
    url(${(props) => props.mobile});
  background-size: cover;

  @media screen and (min-width: 600px) {
    background: ${(props) => `var(--${props.color})`}
      url(${(props) => props.desktop});
    background-size: cover;
  }
`;

const GridSquareBgText = styled(GridSquareBg)`
  .bgtext-content-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

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
`;

export const LandingGrid = () => {
  return (
    <LandingGridSection>
      <GridSquare>
        <div className="content-container">
          <div className="content">
            <h2>
              Transform your
              <br />
              brand
            </h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <GridLink href="">Learn More</GridLink>
          </div>
        </div>
      </GridSquare>
      <GridSquareBg
        color="yellow"
        desktop={EggBgDesktop}
        mobile={EggBgMobile}
      ></GridSquareBg>
      <GridSquareBg
        color="red-soft"
        desktop={CupBgDesktop}
        mobile={CupBgMobile}
      ></GridSquareBg>
      <GridSquare>
        <div className="content-container">
          <div className="content">
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
            <GridLink href="">Learn More</GridLink>
          </div>
        </div>
      </GridSquare>
      <GridSquareBgText
        headerColor="cyan-dark-desat"
        textColor="cyan-dark-desat"
        color="cyan"
        desktop={CherryBgDesktop}
        mobile={CherryBgMobile}
      >
        <div className="bgtext-content-container">
          <div className="bgtext-content">
            <h3>Graphic Design</h3>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
      </GridSquareBgText>
      <GridSquareBgText
        headerColor="blue-dark"
        textColor="blue-dark"
        color="bright-blue"
        desktop={OrangeBgDesktop}
        mobile={OrangeBgMobile}
      >
        <div className="bgtext-content-container">
          <div className="bgtext-content">
            <h3>Photography</h3>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </GridSquareBgText>
    </LandingGridSection>
  );
};
