# Frontend Mentor: Stats preview card component solution

Here's a take on this [challenge](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62).

[View my solution](https://fe-mentor-stats-card.vercel.app/)

## Overview

For this challenge, users need to be able to **view the optimal layout depending on their device's screen size**.

Here's how the project looks like on desktop:

![Desktop Preview](https://github.com/msunji/frontend-mentor/blob/main/stats-card/public/assets/img/desktop-preview.png)

and here's how it looks on smaller screens:

![Mobile Preview](https://github.com/msunji/frontend-mentor/blob/main/stats-card/public/assets/img/mobile-preview.png)

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
