import React from 'react';
import styled from 'styled-components';
import { Container } from './layout';
import { TestimonialData } from '../content/TestimonialData';

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
  max-height: 72px;
  margin-bottom: 2rem;
`;

const TestimonialGrid = styled.div`
  display: flex;
  flex-direction: row;
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
