import GlobalStyle from "./styles/globalStyle";
import { PriceGrid, Footer } from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <PriceGrid>
          <section>
            <h1>Join our community</h1>
            <p className="highlight">
              30-day, hassle-free money back guarantee
            </p>
            <p>
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </section>
          <section></section>
          <section></section>
        </PriceGrid>
      </main>
      <Footer>
        <p class="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . <br />
          Coded by{" "}
          <a href="https://github.com/msunji/frontend-mentor">Marge Consunji</a>
          .
        </p>
      </Footer>
    </>
  );
}

export default App;
