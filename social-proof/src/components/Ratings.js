import styled from "styled-components";
import { RatingsData } from "../content/content";
import { ReactComponent as Star } from "../assets/img/icon-star.svg";

const Rating = styled.div`
  background: var(--grey-magenta-light);
`;

export const Ratings = () => {
  console.log(RatingsData);
  return (
    <section>
      {RatingsData.map(({ stars, rating, id }) => (
        <Rating key={id}>
          <div>
            {[...Array(stars)].map((e, index) => (
              <Star key={index} />
            ))}
          </div>
          <p>{rating}</p>
        </Rating>
      ))}
    </section>
  );
};
