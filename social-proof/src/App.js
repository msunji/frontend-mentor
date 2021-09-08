import GlobalStyle from "./styles/globalStyle";
import { Grid, MainText, Ratings, Footer } from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Grid>
        <MainText />
        <Ratings />
      </Grid>
      <Footer />
    </>
  );
}

export default App;
