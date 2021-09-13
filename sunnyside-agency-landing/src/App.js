import React from 'react';
import GlobalStyle from './styles/globalStyles';
import { Header, Footer } from './components/layout';
import { LandingGrid, Testimonials } from './components';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <LandingGrid />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default App;
