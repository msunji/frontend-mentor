import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <p className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . <br />
        Coded by{" "}
        <a href="https://github.com/msunji/frontend-mentor">Marge Consunji</a>.
      </p>
    </StyledFooter>
  );
};
