import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from './axios'; 
import './Row.css';
import movieTrailer from "movie-trailer";

const baseUrl = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");



    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;

        }
        fetchData();
        
        
    }, [fetchUrl])



    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay:1,
        }
    }


    const handleClick = (movie) =>{
        if (trailerUrl){
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);

                setTrailerUrl(urlParams.get('v'));
            }).catch((error) => console.log(error)); 
        }
        console.log("TrailerUrl:", trailerUrl, "SetTrailerUrl:", setTrailerUrl);
    }
    // console.log(movies);
    

    return (
        <div className='row'>
            {/* title */}
            <h2>{title}</h2>

            <div className='row__posters'>
                {/* several row posters */}

                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${baseUrl}${
                        movie.poster_path
                    }`} 
                    alt={movie.name}></img>
                ))}
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
            {/* container -> posters */}
        </div>
    )
}

export default Row