# Frontend Mentor: Stats Preview Card Component Solution

<p align="center">
  <img src="https://res.cloudinary.com/dxzcdb0pm/image/upload/v1646190533/fem-compilation/stats-preview_juoqvn.png" alt="Stats Preview Card Component Preview" />
</p>
<br />
<p align="center">
  <a href="https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62">View Challenge</a> | <a href="https://fe-mentor-stats-card.vercel.app/">View Live Site</a>
</div>

<br />

---

## Overview

There's not much to be said about this project I think. It's a good way to practice flexbox. Some bits about this project worth noting (for my personal reference):

- The colour overlay for the header background image was set directly in the component's background property, as opposed to making a new div element for the colour overlay layer and fiddling with positions. The code follows as so:

```css
background: url('your-bg-img.jpg') hsl(277, 64%, 61%);
```

There's the other option of using `background-blend-mode` as well, which is something to try later (eventually)

- Another thing. On build, I noticed that the Card component's flex direction wasn't changing from column to row. On closer inspection, this was due to a conflict in its CSS declarations. This was eventually sorted.

## Built with

- React (Bootstrapped with CRA)
- styled-components
- Flexbox
- Mobile-first workflow
- Hosted with Vercel
