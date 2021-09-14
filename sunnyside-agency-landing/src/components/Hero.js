import React from 'react';
import styled from 'styled-components';
import { Container } from './layout';

const HeroSection = styled.section`
  background: var(--bright-blue);
`;

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <h1>We are Creatives</h1>
      </Container>
    </HeroSection>
  )
}