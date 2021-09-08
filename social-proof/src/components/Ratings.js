import styled from "styled-components";
import { RatingsData } from "../content/content";
import { ReactComponent as Star } from "../assets/img/icon-star.svg";

const Rating = styled.div``;

export const Ratings = () => {
  console.log(RatingsData);
  return (
    <section>
      {RatingsData.map(({ stars, rating }) => (
        <Rating>
          <p>{rating}</p>
        </Rating>
      ))}

      <Star />
    </section>
  );
};
