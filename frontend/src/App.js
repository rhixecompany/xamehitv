import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import HomePage from "./pages/HomePage";
import MoviesListPage from "./pages/MoviesListPage";
import MoviePage from "./pages/MoviePage";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" component={HomePage} exact />
        <Route path="/movies" component={MoviesListPage} exact />
        <Route path="/movies/:id" component={MoviePage} />
      </div>
    </Router>
  );
};

export default App;
