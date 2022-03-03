# Frontend Mentor: Social Proof Section

<p align="center">
<img src="https://res.cloudinary.com/dxzcdb0pm/image/upload/v1646190533/fem-compilation/social-proof_mg3jl0.png" alt="Social Proof Sectione Preview" />
</p>
<br />
<p align="center">
  <a href="https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA">View Challenge</a> | <a href="https://fe-mentor-social-proof-mu.vercel.app/">View Live Site</a>
</p>

<br />

## Overview

For this challenge, users need to be able to view the optimal layout depending on their screen size.

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
