import React from 'react';
import GlobalStyle from './styles/globalStyles';
import { Nav, Footer } from './components/layout';
import { LandingGrid, Testimonials } from './components';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <main>
        <LandingGrid />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default App;
