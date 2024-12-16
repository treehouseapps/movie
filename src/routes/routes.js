import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Endpoints from "../api/endpoints";
import Home from "../service/home";
import Footer from "../components/footer";
import Movies from "../service/movies";
import MovieDetails from "../service/MovieDetails";
<<<<<<< HEAD
import TvDetails from "../service/TvDetails";
import { CssBaseline } from '@mui/material'
import Navbar from '../components/navbar'
=======
import { CssBaseline } from "@mui/material";
import Navbar from "../components/navbar";
>>>>>>> origin/main
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

<<<<<<< HEAD
    return (
        <>
        <CssBaseline />
        <Navbar />
        <Router>
            <div>
                <Routes>
                    <Route path={Endpoints.home} element={<Home />} />
                    <Route path={Endpoints.movies} element={<Movies />} />
                    <Route path={Endpoints.movie} element={<MovieDetails />} />
                    <Route path={Endpoints.tv} element={<TvDetails />} />
                </Routes>
                

            </div>
        </Router>
        </>
    );
}

export default PageRoutes;
=======
export default PageRoutes;
>>>>>>> origin/main
