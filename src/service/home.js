import data from '../api/api'
import datasample from '../api/apisample'
import Navbar from '../components/navbar';
import Cardimage from './cardimg'
import Card from './card'
const Home = () => {
    return (
        <div className="container-fluid">
            <div className="backgroundImage">
                <Navbar />
                <h1 className="centertext">recommended movies</h1>
            </div>
            <div className="container-fluid">
                <div className="recommended">
                    <Cardimage data={datasample} />
                    <div className="slider">
                        <i className="bi bi-circle-fill"></i>
                        <i className="bi bi-circle-fill"></i>
                        <i className="bi bi-circle-fill"></i>
                    </div>
                    <div className="catagory">
                        <p>Trending</p>
                        <button className="btn btn-primary">Movies</button>
                        <button className="btn btn-outline-primary">TV Shows</button>
                    </div>
                    <Card data={data} />
                    <Card data={data} />
                </div>
            </div >
        </div >
    );
}

export default Home;