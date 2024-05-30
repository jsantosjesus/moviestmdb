import { useEffect, useState } from "react";
import { IMovie } from "../../entities/movie";
import { useParams } from "react-router-dom";

import './moviePage.sass'

const MoviePage = () => {
    const [movie, setMovie] = useState<IMovie | null>(null);

    const { id } = useParams();

    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWQ5ZTY5MGU2MjEzY2JmYjhlZDM2NTI1NjIwMTdhZSIsInN1YiI6IjY2NTEyMWM1NDhjYTZkZTdlYjczMDRkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwttjI0A9TDLExRkaZ_PxmOv294Ju3MuLr77j0pfMOY'



    useEffect(() => {
        let responseMovie!: IMovie
        fetch(`https://api.themoviedb.org/3/movie/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((resp) => {
                if (resp.ok) return resp.json();
                else console.log('error: ' + resp)
            })
            .then((data) => {
                const reponseGenres: string[] = [];
                const responseCompanies: string[] = [];

                data.genres.map((genre: { name: string }) => {
                    reponseGenres.push(genre.name);
                    return
                });

                data.production_companies.map((company: { name: string }) => {
                    responseCompanies.push(company.name);
                    return
                });

                responseMovie = {
                    id: data.id,
                    img: data.poster_path,
                    overview: data.overview,
                    title: data.title,
                    release: data.release_date,
                    originalLanguage: data.original_language,
                    genres: reponseGenres,
                    productionCompanies: responseCompanies,
                    haveVideo: data.video

                };
                console.log(data)
                setMovie(responseMovie);
            })
            .catch((err) => console.log(err));



    }, [id]);

    return (
        <div id="movie-page">
            {movie && <div className="div-content">
                <div className="div-img">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.img}`}></img>
                </div>
                <div className="div-informations">
                    <h1>{movie.title}</h1>
                    <p><b>Overview: </b>{movie.overview}</p>
                    <p><b>Launched in: </b>{movie.release}</p>
                    <p><b>Original Linguage: </b>{movie.originalLanguage}</p>
                    <p><b>Genres: </b>{movie.genres.map((genre) => `${genre}, `)}</p>
                    <p><b>Production companies: </b>{movie.productionCompanies.map((company) => `${company}, `)}</p>
                    {movie.haveVideo && <button>view videos</button>}
                </div>
            </div>}
        </div>
    );
}
export default MoviePage;
