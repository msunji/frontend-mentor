import React from 'react';
import GlobalStyle from './styles/globalStyles';
import { Nav, Footer } from './components/layout';
import { Hero, LandingGrid, Testimonials, PhotoGrid } from './components';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <main>
        <Hero />
        <LandingGrid />
        <Testimonials />
        <PhotoGrid />
      </main>
      <Footer />
    </>
  );
};

export default App;
