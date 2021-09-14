import React from 'react';
import { TestimonialData } from '../content/TestimonialData';

export const Testimonials = () => {
  return (
    <section>
      {TestimonialData.map(({ name, title, photo, testimonial }) => (
        <div key={name}>
          <img src={photo} alt={name} />
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
