import React from 'react';
import { TestimonialData } from '../content/TestimonialData';

export const Testimonials = () => {
  return (
    <section>
      {TestimonialData.map(({ name, title, testimonial }) => (
        <div key={name}>
          <p>{testimonial}</p>
          <div>
            <p>{name}</p>
            <p>{title}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
