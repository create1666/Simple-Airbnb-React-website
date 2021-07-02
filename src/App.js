import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            {" "}
            <SearchPage />
          </Route>
          <Route path="/">
            {" "}
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
};

export default App;
