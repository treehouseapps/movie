import data from "../api/api";
import datasample from "../api/apisample";
import Navbar from "../components/navbar";
import Slide from "../components/Slide";
import Cardimage from "./cardimg";
import Card from "./card";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <Navbar />
        <Slide />
      </div>
      <div className="container-fluid">
        <div className="recommended">
          <div className="catagory">
            <p>Trending</p>
            <button className="btn btn-primary">Movies</button>
            <button className="btn btn-outline-primary">TV Shows</button>
          </div>
          <Card data={data} />
          <Card data={data} />
        </div>
      </div>
    </div>
  );
};

export default Home;
