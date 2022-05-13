import styled from "styled-components";
import { TestimonialsData } from "../content/content";
import breakpoints from "../styles/breakpoints";

const TestimonialSection = styled.div`
  grid-area: testimonials;
  display: grid;
  gap: 1rem;
  grid-template-column: 1fr;

  @media screen and ${breakpoints.sm} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 5px 5px min-content 5px 0px;
  }
`;

const Testimonial = styled.div`
  background: var(--magenta-dark);
  border-radius: 9px;
  color: var(--grey-magenta-light);
  font-weight: 500;
  padding: calc(1.5 * var(--padding-y)) var(--padding-x);
  flex: 30%;

  .buyer-info {
    display: flex;
    margin-bottom: var(--margin-y);
    align-items: center;

    .buyer-photo {
      border-radius: 50%;
      max-width: 18%;
      height: auto;
      margin-right: 30px;
    }

    .buyer-details {
      font-size: 0.92em;

      .buyer-name {
        font-weight: 700;
      }
      .buyer-title {
        color: var(--pink);
      }
    }
  }

  .testimonial {
    font-size: 0.92em;
    line-height: 1.8;
  }

  @media screen and ${breakpoints.sm} {
    &:nth-of-type(1) {
      grid-row: 1 / span 3;
    }
    &:nth-of-type(2) {
      grid-row: 2 / span 3;
    }
    &:nth-of-type(3) {
      grid-row: 3 / span 3;
    }
  }
`;

export const Testimonials = () => {
  return (
    <TestimonialSection>
      {TestimonialsData.map(({ id, name, title, testimonial, photo }) => (
        <Testimonial key={id}>
          <div className="buyer-info">
            <img className="buyer-photo" src={photo} alt={`${name}`} />
            <div className="buyer-details">
              <p className="buyer-name">{name}</p>
              <p className="buyer-title">{title}</p>
            </div>
          </div>
          <div className="testimonial">{testimonial}</div>
        </Testimonial>
      ))}
    </TestimonialSection>
  );
};
