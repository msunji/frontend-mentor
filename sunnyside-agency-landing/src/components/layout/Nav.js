import React, { useState, useRef } from 'react';
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(1.28 * var(--padding-y)) 0;

  .logo-container {
    display: flex;

    svg {
      transition: opacity 0.5s ease;
      
      &:hover,
      &:active {
        opacity: 0.5;
      }
    }
  }

  .nav-links-container {
    top: 120px;
    position:absolute;
    width: inherit;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;

    &.open {
      opacity: 1;
    }

    &::before {
      content: '';
      position: absolute;
      width: 0px;
      height: 0px;
      border-top: 24px solid transparent;
      border-right: 24px solid white;
      border-bottom: 24px solid transparent;
      border-left: 24px solid transparent;
      top: -24px;
      right: 0;
    }
  }

  ul {
    position: relative;
    width: 100%;
    background: var(--white);
    display: flex;
    height: 350px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: var(--padding-y);
    font-size: 1.1em;

    a,
    a:visited {
      color: var(--blue-greyish-dark);
    }
  }

  @media screen and ${breakpoints.lg} {
    max-width: 1500px;

    .nav-links-container {
      position: static;
      width: auto;
      display: block;
      opacity: 1;

      &::before {
        display: none;
      }
    }

    ul {
      display: flex;
      position: static;
      height: auto;
      align-items: center;
      font-size: 0.9em;
      background: transparent;
      flex-direction: row;
      padding: 0;

      li {
        margin-left: 2rem;
  
        a,
        a:visited {
          color: var(--blue-black);
          letter-spacing: -0.13px;
          color: var(--white);
          transition: opacity 0.5s ease;
        }

        a:not(.button):hover,
        a:not(.button):active {
          opacity: 0.5;
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
  padding: 0.84rem 1.7rem;
  text-transform: uppercase;
  line-height: 1.389;
  letter-spacing: -0.11px;
  transition: all 0.5s ease;
  background: var(--yellow);
  cursor: pointer;

  @media screen and ${breakpoints.lg} {
    background: hsla(0, 0%, 100%, 1);
    &:hover,
    &:active {
      background: hsla(0, 0%, 100%, 0.25);
      color: var(--white); 
    }
  }

`;

const MobileToggle = styled.div`
  width: 24px;
  height: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: opacity 0.4s ease;
  cursor: pointer;

  &:hover, &:active {
    opacity: 0.5;
  }

  opacity: ${props => props.isOpen ? 0.5 : 1};

  span {
    height: 2px;
    width: 100%;
    background: var(--white);
    display: block;
  }

  @media screen and ${breakpoints.lg} {
    display: none;
  }
`;

export const Nav = () => {
  const mobileRef = useRef(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleMobileMenu = () => setOpenMobileMenu(!openMobileMenu);
  const closeMobileMenu = () => setOpenMobileMenu(false);

  return (
    <StyledNav>
      <NavContainer>
        <a className="logo-container" href="#">
          <NavLogo />
        </a>
        <MobileToggle onClick={handleMobileMenu} isOpen={openMobileMenu}>
          <span></span>          
          <span></span>
          <span></span>
        </MobileToggle>
        <div className={`nav-links-container ${openMobileMenu ? 'open' : ''}`} ref={mobileRef} onClick={handleMobileMenu}>
          <ul>
            <li onClick={closeMobileMenu}>
              <a href="#">About</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">Services</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">Projects</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#" className="button">
                <ContactButton>
                  Contact
                </ContactButton>
              </a>
            </li>
          </ul>
        </div>
      </NavContainer>
    </StyledNav>
  )
}