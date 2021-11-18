import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PricesPage from "../../pages/PricesPage";
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import Footer from "../Footer/footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Navbar />
          <Switch>
            <Hero />
            <Route exact path="/price/:id">
              <PricesPage />
            </Route>
            <Route path="*">
              <p>Page not found</p>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
