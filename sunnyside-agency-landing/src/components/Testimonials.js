import React from 'react';
import styled from 'styled-components';
import { Container } from './layout';
import { TestimonialData } from '../content/TestimonialData';

const TestimonialsSection = styled.section`
  padding: calc(4.5 * var(--padding-y)) 0;
  h3 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: var(--blue-greyish);
    margin-bottom: 4rem;
    font-weight: 900;
  }
`;

const Testimonial = styled.div`
  color: var(--blue-greyish-darker);
  flex: 30%;
  text-align: center;
  line-height: 1.9;

  .testimonial__text {
    margin-bottom: 3rem;
  }

  .person-info {
    &__name {
      font-family: var(--fraunces);
      color: var(--blue-black);
    }

    &__title {
      font-size: 0.85em;
      color: var(--blue-greyish);
    }
  }

  &:not(:last-of-type) {
    margin-right: 1.8rem;
  }
`;

const TestimonialPhoto = styled.img`
  border-radius: 50%;
  max-height: 75px;
  margin-bottom: 3rem;
`;

const TestimonialGrid = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Testimonials = () => {
  return (
    <TestimonialsSection>
      <Container>
        <h3>Client Testimonials</h3>
        <TestimonialGrid>
          {TestimonialData.map(({ name, title, photo, testimonial }) => (
            <Testimonial key={name}>
              <TestimonialPhoto src={photo} alt={name} />
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
