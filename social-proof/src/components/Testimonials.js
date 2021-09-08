import styled from "styled-components";
import { TestimonialsData } from "../content/content";

const TestimonialSection = styled.section`
  // grid-area: testimonials;
`;

const Testimonial = styled.div`
  background: var(--magenta-dark);
  border-radius: 9px;
  color: var(--grey-magenta-light);
  font-weight: 500;
  padding: var(--padding-y) var(--padding-x);

  :not(:last-of-type) {
    margin-bottom: 1.3rem;
  }
`;

export const Testimonials = () => {
  return (
    <TestimonialSection>
      {TestimonialsData.map(({ id, name, title, testimonial, photo }) => (
        <Testimonial key={id}>
          <div>
            <div>
              <img src={photo} alt={`${name}`} />
            </div>
            <div>
              <p>{name}</p>
              <p>{title}</p>
            </div>
          </div>
          <div>{testimonial}</div>
        </Testimonial>
      ))}
    </TestimonialSection>
  );
};
