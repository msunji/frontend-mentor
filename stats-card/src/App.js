import React from "react";
import GlobalStyle from "./styles/globalStyle";
import { Card, Stats, MainText, HeaderImg } from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Card className="card">
        <HeaderImg className="header-img" />
        <section className="card-content">
          <MainText className="card-text">
            <h1>
              Get <span className="highlight">insights</span> that help your
              business grow.
            </h1>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </MainText>
          <Stats className="card-stats">
            <div className="stat">
              <h3>10k+</h3>
              <p>companies</p>
            </div>
            <div className="stat">
              <h3>314</h3>
              <p>templates</p>
            </div>
            <div className="stat">
              <h3>12M+</h3>
              <p>queries</p>
            </div>
          </Stats>
        </section>
      </Card>
    </>
  );
}

export default App;
