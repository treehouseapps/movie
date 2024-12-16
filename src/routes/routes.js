import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Endpoints from "../api/endpoints";
import Home from "../service/home";
import Footer from "../components/footer";
import Movies from "../service/movies";
import MovieDetails from "../service/MovieDetails";
import { CssBaseline } from "@mui/material";
import Navbar from "../components/navbar";
const PageRoutes = () => {
  return (
    <>
      <CssBaseline />
      <Navbar 
      />
      <Router>
        <div>
          <Routes>
            <Route path={Endpoints.home} element={<Home />} />
            <Route path={Endpoints.movies} element={<Movies />} />
            <Route path={Endpoints.movie} element={<MovieDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default PageRoutes;
