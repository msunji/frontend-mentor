# Frontend Mentor: Social Proof Section

[View the Challenge](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA) | [View the Solution](https://fe-mentor-social-proof-mu.vercel.app/)

## Overview

For this challenge, users need to be able to view the optimal layout depending on their screen size.

Here's what the project looks like on desktop:

![Desktop Preview](https://github.com/msunji/frontend-mentor/blob/main/social-proof/public/img/desktop-preview.png)

and on mobile:

![Mobile Preview](https://github.com/msunji/frontend-mentor/blob/main/social-proof/public/img/mobile-preview.png)

As per usual, I've used React and styled-components for this solution, as well as a mix of flexbox and CSS Grid.

Initially I had the testimonial section set to flex and aligned each child with `align-self`. On smaller screen sizes though, I found that it ended up looking a bit like this:

![Mobile Preview](https://github.com/msunji/frontend-mentor/blob/main/social-proof/public/img/testimonial-flex.png)

Not super keen to see it looking like that, so I changed the testimonial section to a grid, and messed around a bit with row values till I got the alignment I wanted.

## Built with

- React (bootstrapped with CRA)
- Prettier
- styled-components
- CSS grid
- Flexbox
- Hosted with Vercel
