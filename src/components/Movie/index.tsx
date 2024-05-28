import './movie.sass'

type MovieProps = {
    image: string
    title: string
    duration: string
}

const Movie = ({image, title, duration} : MovieProps) => {
    return (
        <div id="movie">
            <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} />
            <h3>{title}</h3>
            <p>{duration} min.</p>
            <button className='btn-information'>Information</button>
        </div>
    );
}
export default Movie;
