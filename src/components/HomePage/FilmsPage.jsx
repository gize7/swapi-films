import React from 'react';
import { useEffect, useState } from 'react';
import {swapiFilmsApi} from '../../api/swapiFims';
import './FilmsPage.css';
import { MovieCard } from '../Movie-Card/MovieCard';

 const FilmsPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, [])



    const getMovies = async () => {
        const { data } = await swapiFilmsApi();
        console.log(data);
        setMovies(data.results)

    }

    return (
        <section className="home-container">
            <h3>swapi Films</h3>
            <div className="movies-container">
                {
                    movies.map((movie) => {
                        const favorites = JSON.parse(localStorage.getItem('favoriteFilms'))
                        console.log(favorites);

                        let isfavorite;
                        if (favorites) {
                            const index = favorites.findIndex(x => x.episode_id === movie.episode_id)
                         

                            if (index > -1) {
                                isfavorite = true
                            }
                            else {
                                isfavorite = false
                            }
                        }
                      

                        return <MovieCard 
                        isFavorite={isfavorite}
                         key={movie.episode_id}
                          movie={movie} />
                    })
                }

            </div>
        </section>

    )
}
export default FilmsPage;