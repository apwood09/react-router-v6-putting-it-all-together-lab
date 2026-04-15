import { Link, useOutletContext } from "react-router-dom";

const DirectorList = () => {

    const { directors } = useOutletContext();

    
    const displayDirectors = directors.map(d => (
        <li key={d.id}>
            <Link to={`/directors/${d.id}`}>{d.name}</Link>
        </li>
    ));

    
    return (
        <div>
            <h2>Directors</h2>
            <Link to="/directors/new" className="add-btn">➕ Add New Director</Link>
            <ul>
                {displayDirectors}
            </ul>
        </div>
    );
}; 

export default DirectorList;