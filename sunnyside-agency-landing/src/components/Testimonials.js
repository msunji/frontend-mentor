import React from 'react';
import styled from 'styled-components';
import { Container } from './layout';
import { TestimonialData } from '../content/TestimonialData';
// Import breakpoints
import breakpoints from '../styles/breakpoints';

const TestimonialsSection = styled.section`
  padding: calc(3.5 * var(--padding-y)) 0;

  h4 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: var(--blue-greyish);
    margin-bottom: 4rem;
    font-weight: 900;
    font-size: 1.1em;
  }
`;

const Testimonial = styled.div`
  color: var(--blue-greyish-darker);
  flex: 30%;
  text-align: center;
  line-height: 1.7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 3.5rem;
  }

  .testimonial__text {
    margin-bottom: 1.8rem;
  }

  .person-info {
    &__name {
      font-family: var(--fraunces);
      color: var(--blue-black);
      font-weight: 900;
    }

    &__title {
      font-size: 0.85em;
      color: var(--blue-greyish);
    }
  }

  @media screen and ${breakpoints.lg} {
    .testimonial__text {
      margin-bottom: 3.5rem;
    }

    // Remove bottom margins from mobile styling
    &:last-of-type {
      margin-bottom: 0rem;
    }
    &:not(:last-of-type) {
      margin-bottom: 0rem;
      margin-right: 1rem;
    } 
  }
`;

const TestimonialPhoto = styled.img`
  border-radius: 50%;
  max-height: 72px;
  margin-bottom: 1.5rem;
`;

const TestimonialGrid = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and ${breakpoints.lg} {
    flex-direction: row;
  }
`;

export const Testimonials = () => {
  return (
    <TestimonialsSection>
      <Container>
        <h4>Client Testimonials</h4>
        <TestimonialGrid>
          {TestimonialData.map(({ name, title, photo, testimonial }) => (
            <Testimonial key={name}>
              <div>
                <TestimonialPhoto src={photo} alt={name} />
              </div>

              <p className="testimonial__text">{testimonial}</p>
              <div className="person-info">
                <p className="person-info__name">{name}</p>
                <p className="person-info__title">{title}</p>
              </div>
            </Testimonial>
          ))}
        </TestimonialGrid>
      </Container>
    </TestimonialsSection>
  );
};
