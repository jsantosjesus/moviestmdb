import { useEffect, useState } from 'react';
import advengers from './assets/advengers.webp'
import AppBar from './components/AppBar';
import Movie from './components/Movie';

import { IMovie } from './entities/movie';

import './styles/home.sass'


function App() {

  const [listMovie, setListMovie] = useState<IMovie[]>([]);

  // const token = 'eyJhbciOiJIUzI1NiJ9.eyJhdWQiOiJjZWQ5ZTY5MGU2MjEzY2JmYjhlZDM2NTI1NjIwMTdhZSIsInN1YiI6IjY2NTEyMWM1NDhjYTZkZTdlYjczMDRkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwttjI0A9TDLExRkaZ_PxmOv294Ju3MuLr77j0pfMOY'

  useEffect(() => {

    fetch('https://api.themoviedb.org/3/discover/movie', {
      method: 'GET',
      headers: {
        // 'Authorization': 'Bearer ' + token
      }
    })
      .then((resp) => {
        if (resp.ok) return resp.json();
        else console.log('error')
      })
      .then((data) => {
        const responseListMovie: IMovie[] = [];
        // console.log(data)

        data.results.map((movie: { poster_path: string; title: string; overview: string; }) => {
          const mov: IMovie = {
            img: movie.poster_path as string,
            title: movie.title as string,
            description: movie.overview as string,
            duration: '240'
          }

          responseListMovie.push(mov);

        })
        setListMovie(responseListMovie);
      })
      .catch((err) => console.log(err))

  }, [])



  return (
    <div className="App">
      <div className='folder'>
        <AppBar />
        <img src={advengers} width="100%" />
      </div>
      <div className="movies">
        {listMovie && listMovie.map((movie) => (
          <Movie image={movie.img} title={movie.title} duration={movie.duration} />  
        ))}
        
      </div>
    </div>
  );
}

export default App
