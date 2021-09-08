import styled from "styled-components";
import { TestimonialsData } from "../content/content";
import breakpoints from "../styles/breakpoints";

const TestimonialSection = styled.section`
  grid-area: testimonials;
  display: flex;
  flex-direction: column;

  @media screen and ${breakpoints.sm} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and ${breakpoints.lg} {
    height: 30em;
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

  :not(:last-of-type) {
    margin-bottom: 1.3rem;
  }

  .testimonial {
    font-size: 0.92em;
    line-height: 1.8;
  }

  @media screen and ${breakpoints.sm} {
    :not(:last-of-type) {
      margin-bottom: 0;
    }
    :not(:last-of-type) {
      margin-right: 2rem;
    }
  }

  @media screen and ${breakpoints.lg} {
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
