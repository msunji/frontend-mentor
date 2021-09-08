import GlobalStyle from "./styles/globalStyle";
import { Grid, MainText, Ratings, Footer, Testimonials } from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Grid>
        <MainText />
        <Ratings />
        <Testimonials />
      </Grid>
      <Footer />
    </>
  );
}

export default App;
