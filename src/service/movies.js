import Card from "../components/card/card";
import data from '../api/api'
const Movies = () => {
    return (
        <div>
            <h1>This is movies page</h1>
            < Card data={data} />
            <a href="/"><button>Home</button></a>
        </div>
    );
}

export default Movies;