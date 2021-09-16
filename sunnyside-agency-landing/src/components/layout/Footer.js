import React from 'react';
import styled from 'styled-components';
import Logo from '/public/img/logo.svg';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from 'react-icons/fa';
import { Container } from './Container';

const StyledFooter = styled.footer`
  padding: var(--padding-y) 0;
  background: var(--cyan);
  color: var(--cyan-dark-moderate);

  .footer-logo {
    transform: scale(1.2);
    path {
      fill: var(--cyan-dark-desat);
      opacity: 0.85;
    }
    margin-bottom: 1.8rem;
  }

  .attribution {
    font-size: 0.9em;
    a,
    a:visited {
      text-decoration: none;
      transition: color 0.5s ease;
    }
  
    a:hover,
    a:active {
      color: var(--white);
    }
  }
`;

const FooterContainer = styled(Container)`
  padding: var(--padding-y);
  text-align: center;
`;

const FooterLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterNavLinks = styled(FooterLinks)`
  margin-bottom: 4rem;
  color: var(--cyan-dark-moderate);
  li:not(:last-of-type) {
    margin-right: 3rem;
  }

  a,
  a:visited {
    text-decoration: none;
    color: var(--cyan-dark-moderate);
    transition: color 0.5s ease;
  }

  a:hover,
  a:active {
    color: var(--white);
  }
`;

const FooterSocMedLinks = styled(FooterLinks)`
  margin-bottom: 4rem;

  svg {
    transform: scale(1.4);
    fill: var(--cyan-dark-desat);
    opacity: 0.85;
    transition: fill 0.5s ease;
    &:hover, &:active {
      fill: var(--white);
    }
  }
  li:not(:last-of-type) {
    margin-right: 2.1rem;
  }
`;

const SocialMediaLinks = styled.ul``;

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <div>
          <Logo className="footer-logo" />
        </div>
        <FooterNavLinks>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </FooterNavLinks>
        <FooterSocMedLinks>
          <li>
            <a href="#">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaPinterest />
            </a>
          </li>
        </FooterSocMedLinks>
        <div className="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          .<br />
          Coded by <a href="https://github.com/msunji">Marge C.</a>
        </div>
      </FooterContainer>
    </StyledFooter>
  );
};
