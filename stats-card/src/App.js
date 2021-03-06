import React from 'react';
import GlobalStyle from './styles/globalStyle';
import { Card, Stats, MainText, HeaderImg } from './components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Card>
        <HeaderImg />
        <section className="card-content">
          <MainText>
            <h1>
              Get <span className="highlight">insights</span> that help your
              business grow.
            </h1>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </MainText>
          <Stats>
            <div className="stat">
              <h2>10k+</h2>
              <p>companies</p>
            </div>
            <div className="stat">
              <h2>314</h2>
              <p>templates</p>
            </div>
            <div className="stat">
              <h2>12M+</h2>
              <p>queries</p>
            </div>
          </Stats>
        </section>
      </Card>
      <footer>
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        .
        <br />
        Coded by{' '}
        <a href="https://github.com/msunji/frontend-mentor">Marge Consunji</a>.
        <br />
      </footer>
    </>
  );
}

export default App;
