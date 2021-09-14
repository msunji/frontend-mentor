import React from 'react';
import styled from 'styled-components';

const LandingGridSection = styled.section`
  display: grid;
  grid-template-rows: repeat(3, minmax(400px, 1fr));
  grid-template-columns: 1fr 1fr;

  .grid-egg {
    background: var(--yellow);
  }

  .grid-cherry {
    background: var(--cyan);
  }

  .grid-orange {
    background: var(--bright-blue);
  }
`;

export const LandingGrid = () => {
  return (
    <LandingGridSection>
      <div className="grid-egg__text">
        <h2>Transform your brand</h2>
        <p>We are a full-service creative agency specializing
        in helping brands grow fast. Engage your clients through compelling
        visuals that do most of the marketing for you.</p> 
        <a href="">Learn more</a>
      </div>
      <div className="grid-egg">
      </div>
      <div className="grid-cup"></div>
      <div className="grid-cup__text">
        Stand out to the right audience Using a collaborative formula of
        designers, researchers, photographers, videographers, and copywriters,
        we’ll build and extend your brand in digital places. Learn more
      </div>
      <div className="grid-cherry">
        Graphic design Great design makes you memorable. We deliver artwork that
        underscores your brand message and captures potential clients’
        attention.
      </div>
      <div className="grid-orange">
        Photography Increase your credibility by getting the most stunning,
        high-quality photos that improve your business image.
      </div>
    </LandingGridSection>
  );
};
