import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import NavLogo from '/public/img/logo.svg';

const StyledNav = styled.nav`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

const NavContainer = styled(Container)`
  width: 90%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(1.28 * var(--padding-y)) 0;

  svg {
    transform: scale(1.371);
  }

  ul {
    display: flex;
    align-items: center;
    font-size: 0.9em;

    li {
      margin-left: 2rem;

      a,
      a:visited {
        letter-spacing: -0.13px;
        color: var(--white);
      }
    }
  }
`;

export const Nav = () => {
  return (
    <StyledNav>
      <NavContainer>
        <div>
          <NavLogo />
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
            <a href="#">Contact</a>
          </li>
        </ul>
      </NavContainer>
    </StyledNav>
  )
}