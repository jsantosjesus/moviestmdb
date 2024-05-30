import { Link } from 'react-router-dom'
import './movie.sass'

type MovieProps = {
    id: string
    image: string
    title: string
    year: string
    search: boolean
}

const Movie = ({id, image, title, year, search} : MovieProps) => {
    return (
        <div id={!search ? "movie" : "movie-search"}>
            <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} />
            <h3>{title}</h3>
            <p>launched in {year}</p>
            <Link to={`moviepage/${id}`}><button className='btn-information'>Information</button></Link>
        </div>
    );
}
export default Movie;
