import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import NavLogo from '/public/img/logo.svg';
// Import breakpoints
import breakpoints from '../../styles/breakpoints';

const StyledNav = styled.nav`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

const NavContainer = styled(Container)`
  width: 90%;
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(1.28 * var(--padding-y)) 0;

  svg {
    transform: scale(1.371);
  }

  ul {
    display: none;
  }

  @media screen and ${breakpoints.lg} {
    ul {
      display: flex;
      align-items: center;
      font-size: 0.9em;
  
      li {
        margin-left: 2rem;
  
        a,
        a:visited {
          color: var(--blue-black);
          letter-spacing: -0.13px;
          color: var(--white);
        }
      }
    }
  }
`;

const ContactButton = styled.button`
  font-family: var(--fraunces);
  font-size: 0.83em;
  font-weight: 700;
  border-radius: 2em;
  border: none;
  background: hsla(0, 0%, 100%, 1);
  padding: 0.84rem 1.7rem;
  text-transform: uppercase;
  line-height: 1.389;
  letter-spacing: -0.11px;
  transition: all 0.5s ease;

  &:hover,
  &:active {
    background: hsla(0, 0%, 100%, 0.25);
    color: var(--white); 
    cursor: pointer;
  }
`;

export const Nav = () => {
  return (
    <StyledNav>
      <NavContainer>
        <div>
          <a href="#">
            <NavLogo />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">
              <ContactButton>
                Contact
              </ContactButton>
            </a>
          </li>
        </ul>
      </NavContainer>
    </StyledNav>
  )
}