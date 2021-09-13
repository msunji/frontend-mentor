import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/img/logo.svg';
import { Container } from './Container';

const StyledFooter = styled.footer`
  padding: var(--padding-y) 0;
  background: var(--cyan);
  color: var(--cyan-dark-moderate);

  .footer-logo {
    path {
      fill: var(--cyan-dark-moderate);
    }
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  align-items: center;
`;

const SocialMediaLinks = styled.ul``;

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div>
          <Logo className="footer-logo" />
        </div>
        <FooterLinks>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </FooterLinks>
        <div className="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </Container>
    </StyledFooter>
  );
};
