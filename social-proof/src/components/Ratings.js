import styled from "styled-components";
import { RatingsData } from "../content/content";

const RatingsSection = styled.section`
  grid-area: ratings;
`;

const Rating = styled.div`
  background: var(--grey-magenta-light);
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.3rem;
  padding: 1.12rem 0;
  align-items: center;

  .stars-container {
    img:not(:last-of-type) {
      margin-right: 8px;
    }
    margin-bottom: 5px;
  }

  p {
    font-weight: 700;
    color: var(--dark-magenta);
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
