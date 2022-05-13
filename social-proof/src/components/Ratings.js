import styled from "styled-components";
import { RatingsData } from "../content/content";
import breakpoints from "../styles/breakpoints";

const RatingsSection = styled.div`
  grid-area: ratings;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Rating = styled.div`
  background: var(--grey-magenta-light);
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  padding: 1.12rem 2rem;
  align-items: center;
  :not(:last-of-type) {
    margin-bottom: 1.3rem;
  }

  .stars-container {
    display: flex;
    img:not(:last-of-type) {
      margin-right: 8px;
    }
    margin-bottom: 5px;
  }

  p {
    font-weight: 700;
    font-size: 0.92em;
    color: var(--dark-magenta);
  }

  @media screen and ${breakpoints.xs} {
    width: 30em;
    align-self: center;
  }

  @media screen and ${breakpoints.lg} {
    flex-direction: row;

    .stars-container {
      margin-right: 2.3rem;
    }

    &:nth-of-type(1) {
      align-self: flex-start;
    }
    &:nth-of-type(2) {
      align-self: center;
    }
    &:nth-of-type(3) {
      align-self: flex-end;
    }
  }
`;

export const Ratings = () => {
  console.log(RatingsData);
  return (
    <RatingsSection>
      {RatingsData.map(({ stars, rating, id }) => (
        <Rating key={id}>
          <div className="stars-container">
            {[...Array(stars)].map((e, index) => (
              <img src="/img/icon-star.svg" key={index} alt="star" />
            ))}
          </div>
          <p className="rating">{rating}</p>
        </Rating>
      ))}
    </RatingsSection>
  );
};
