import { useEffect, useState } from 'react';
import advengers from './assets/advengers.webp'
import AppBar from './components/AppBar';
import Movie from './components/Movie';

import { IMovie } from './entities/movie';

import './styles/home.sass'


function App() {

  const [listMovie, setListMovie] = useState<IMovie[]>([]);
  const [numberPage, setNumberPage] = useState<number>(2);

  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWQ5ZTY5MGU2MjEzY2JmYjhlZDM2NTI1NjIwMTdhZSIsInN1YiI6IjY2NTEyMWM1NDhjYTZkZTdlYjczMDRkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwttjI0A9TDLExRkaZ_PxmOv294Ju3MuLr77j0pfMOY'

  useEffect(() => {

    fetch('https://api.themoviedb.org/3/discover/movie', {
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
        const responseListMovie: IMovie[] = [];
        console.log(data)

        data.results.map((movie: { id: string; poster_path: string; title: string; overview: string; }) => {
          const mov: IMovie = {
            id: movie.id as string,
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

  const requestNextPage = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?page=${numberPage}`, {
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
        const responseListMovie: IMovie[] = listMovie;
        console.log(data)

        data.results.map((movie: { id: string; poster_path: string; title: string; overview: string; }) => {
          const mov: IMovie = {
            id: movie.id as string,
            img: movie.poster_path as string,
            title: movie.title as string,
            description: movie.overview as string,
            duration: '240'
          }

          responseListMovie.push(mov);

        })
        setListMovie(responseListMovie);
        setNumberPage(numberPage + 1);
      })
      .catch((err) => console.log(err))

  
  }


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
      <div className="div-button-more">
        <button className='button-more' onClick={requestNextPage}>View More...</button>
      </div>
    </div>
  );
}

export default App
