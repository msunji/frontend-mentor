import React from 'react';
import styled from 'styled-components';

const LandingGridSection = styled.section`
  display: grid;
  grid-template-rows: repeat(3, minmax(400px, 1fr));
  grid-template-columns: repeat(2, 1fr);

  .grid-egg {
    background: var(--yellow);
  }

  .grid-cup {
    background: var(--red-soft);
  }

  .grid-cherry {
    background: var(--cyan);
  }

  .grid-orange {
    background: var(--bright-blue);
  }
`;

const GridSquare = styled.div`
  aspect-ratio: 1/1;  
`;

export const LandingGrid = () => {
  return (
    <LandingGridSection>
      <GridSquare className="grid-egg__text">
        <h2>Transform your brand</h2>
        <p>We are a full-service creative agency specializing
        in helping brands grow fast. Engage your clients through compelling
        visuals that do most of the marketing for you.</p> 
        <a href="">Learn more</a>
      </GridSquare>
      <GridSquare className="grid-egg">
      </GridSquare>
      <GridSquare className="grid-cup"></GridSquare>
      <GridSquare className="grid-cup__text">
        Stand out to the right audience Using a collaborative formula of
        designers, researchers, photographers, videographers, and copywriters,
        we’ll build and extend your brand in digital places. Learn more
      </GridSquare>
      <GridSquare className="grid-cherry">
        <h3>Graphic design</h3>
        <p>Great design makes you memorable. We deliver artwork that
        underscores your brand message and captures potential clients’
        attention.</p>
      </GridSquare>
      <GridSquare className="grid-orange">
        <h3>Photography</h3> Increase your credibility by getting the most stunning,
        high-quality photos that improve your business image.
      </GridSquare>
    </LandingGridSection>
  );
};
