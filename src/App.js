import React, { useEffect, useState } from 'react'
import './App.css';
import searchIcon from './search.svg'
import MovieCard from './MovieCard';
//3995c9a5

const API_URL = 'http://www.omdbapi.com?apikey=3995c9a5';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        searchMovie('Batman')

    }, []);
    const searchMovie = async (title) => {
        try {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();

            setMovies(data.Search);
        } catch (error) {
            console.log("error fetching data", error);
        }
    }


    // const moives = {
    //     "Title": "Batman Begins",
    //     "Year": "2005",
    //     "imdbID": "tt0372784",
    //     "Type": "movie",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    // }
    return (

        <div className='app'>

            <h1>MovieLand</h1>
            <div className='search'>
                <input placeholder='Search for moives' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={searchIcon} alt='searchicon' onClick={() => searchMovie(searchTerm)} />
            </div>

            {movies && movies.length > 0 ? (

                <div className='container'>

                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='empty'>
                    <h2>No Movies Found</h2>
                </div>

            )


            }


        </div>
    )
}

export default App

