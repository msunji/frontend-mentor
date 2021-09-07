import GlobalStyle from "./styles/globalStyle";
import { PriceGrid, Footer } from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <PriceGrid>test</PriceGrid>
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
