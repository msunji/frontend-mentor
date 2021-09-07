import styled from "styled-components";

export const Button = styled.button`
  background: var(--bright-yellow);
  color: white;
  width: 100%;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.01em;
  padding: 0.8rem 3rem;
  box-shadow: 1px 8px 33px -7px rgba(39, 69, 68, 0.43);
  transition: background 0.5s ease;

  &:hover {
    background: #b1bc33;
  }
`;
