import GlobalStyle from "./styles/globalStyle";
import { Grid, MainText, Ratings, Footer, Testimonials } from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Grid>
          <MainText />
          <Ratings />
          <Testimonials />
        </Grid>
      </main>
      <Footer />
    </>
  );
}

export default App;
