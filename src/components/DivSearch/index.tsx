import { useState } from 'react'
import { IMovieHome } from '../../entities/movie'
import './divSearch.sass'
import Movie from '../Movie'



const DivSearch = () => {
    const [searchResult, setSearchResult] = useState<IMovieHome[]>([]);
    // const [searchTerm, setSearchTerm] = useState<string>("");

    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWQ5ZTY5MGU2MjEzY2JmYjhlZDM2NTI1NjIwMTdhZSIsInN1YiI6IjY2NTEyMWM1NDhjYTZkZTdlYjczMDRkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwttjI0A9TDLExRkaZ_PxmOv294Ju3MuLr77j0pfMOY'


    const functionSearch = (searchTerm: string) => {
        if(searchTerm.length > 2){
        // console.log(term)

        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}`, {
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
                const responseListMovie: IMovieHome[] = [];
                console.log('data')

                data.results.map((movie: { id: string; poster_path: string; title: string; release_date: string }) => {
                    const mov: IMovieHome = {
                        id: movie.id as string,
                        img: movie.poster_path as string,
                        title: movie.title as string,
                        year: movie.release_date.substring(0, 4) as string
                    }

                    responseListMovie.push(mov);

                })
                setSearchResult(responseListMovie);
            })
            .catch((err) => console.log(err))

        } else {
            setSearchResult([]);
        }
    }
  



    return (
        <div id="div-search">
            <input className="search" placeholder="SEARCH WHERE" onChange={(e) => functionSearch(e.target.value)}/>
            {searchResult.length ? <div className='content-div-search'>
                {searchResult.map((movie) => (
                    <Movie id={movie.id} image={movie.img} title={movie.title} year={movie.year} search={true} key={movie.id}/>
                ))

                }
            </div> : <></>}
        </div>
    );
}
export default DivSearch;
