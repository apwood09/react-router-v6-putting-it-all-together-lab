import { Link, Outlet, useParams, useOutletContext } from "react-router-dom";

function DirectorCard() {

    const { id } = useParams();
    
    const { directors } = useOutletContext();

    const director = directors.find(d => String(d.id) === String(id));

    if (!director) {
        return <h2>Director not found.</h2>;
    }

    return (
        <div className="director-profile">
            <h2>{director.name}</h2>
            <p>{director.bio}</p>
            
            <h3>Movies:</h3>
            <ul>
                {director.movies.map((movie) => (
                    <li key={movie.id}>
                        
                        <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>

            
            <Link to="movies/new" className="button">➕ Add New Movie</Link>

            <hr />
            
        
            <Outlet context={{ director }} />
        </div>
    );
}

export default DirectorCard;
