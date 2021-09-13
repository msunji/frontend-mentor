import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';

const NavContainer = styled(Container)`
  width: 90%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
    font-size: 0.9em;

    li {
      margin-left: 2rem;
    }
  }
`;

export const Nav = () => {
  return (
    <nav>
      <NavContainer>
        <div>
          logo
        </div>
        <ul>
          <li>
            About
          </li>
          <li>
            Services
          </li>
          <li>
            Projects
          </li>
          <li>
            Contact
          </li>
        </ul>
      </NavContainer>
    </nav>
  )
}