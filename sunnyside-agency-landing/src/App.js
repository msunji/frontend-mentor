import React from 'react';
import { Header, Footer } from './components/layout';
import { LandingGrid, Testimonials } from './components';

const App = () => {
  return (
    <> 
      <Header />
      <main>
      <LandingGrid />
      <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default App;