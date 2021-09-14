import React from 'react';
import styled from 'styled-components';
import BottlesDesktop from '/public/img/desktop/image-gallery-milkbottles.jpg';
import OrangeDesktop from '/public/img/desktop/image-gallery-orange.jpg';
import ConeDesktop from '/public/img/desktop/image-gallery-cone.jpg';
import SugarcubesDesktop from '/public/img/desktop/image-gallery-sugarcubes.jpg';

import BottlesMobile from '/public/img/desktop/image-gallery-milkbottles.jpg';
import OrangeMobile from '/public/img/desktop/image-gallery-orange.jpg';
import ConeMobile from '/public/img/desktop/image-gallery-cone.jpg';
import SugarcubesMobile from '/public/img/desktop/image-gallery-sugarcubes.jpg';

const photos = [
  {
    desktop: BottlesDesktop,
    mobile: BottlesMobile
  },
  {
    desktop: OrangeDesktop,
    mobile: OrangeMobile
  },
  {
    desktop: ConeDesktop,
    mobile: ConeMobile
  },
  {
    desktop: SugarcubesDesktop,
    mobile: SugarcubesMobile
  },
];

const Grid = styled.section`
  display: flex;
`;

const Photo = styled.div`
  width: 25%;
  height: 400px;
  background: url(${props => props.mobile});
  background-size: cover;
  background-repeat: no-repeat;
`;


export const PhotoGrid = () => {
  return (
    <Grid>
      { photos.map(({ desktop, mobile }) => (<Photo key={desktop} desktop={desktop} mobile={mobile} />))}
    </Grid>
  )
}