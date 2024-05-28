import { IMovie } from "../../entities/movie";


const MoviePage = (movie: IMovie) => {
    return (
        <div id="movie-page">
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.img}`}></img>
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                </div>
            </div>
        </div>
    );
}
export default MoviePage;
