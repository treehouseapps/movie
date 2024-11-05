import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Endpoints from "../api/endpoints";
import Home from "../service/home"
import Footer from "../components/footer"
import Movies from "../service/movies";
const PageRoutes = () => {

    return (
        <Router>
            <div>
                <Routes>
                    <Route path={Endpoints.home} element={<Home />} />
                    <Route path={Endpoints.movies} element={<Movies />} />
                </Routes>
                <Footer />
            </div>
        </Router >
    );
}

export default PageRoutes;