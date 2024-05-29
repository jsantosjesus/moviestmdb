import './movie.sass'

type MovieProps = {
    image: string
    title: string
    year: string
    search: boolean
}

const Movie = ({image, title, year, search} : MovieProps) => {
    return (
        <div id={!search ? "movie" : "movie-search"}>
            <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} />
            <h3>{title}</h3>
            <p>launched in {year}</p>
            <button className='btn-information'>Information</button>
        </div>
    );
}
export default Movie;
