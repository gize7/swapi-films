import React from 'react';
import {useState} from 'react'
import './MovieCard.css';

export const MovieCard = (props) => {
    const [isFavorite, setIsFavorite] = useState(props.isFavorite);
      
    const like =()=>{
        const favorites  = JSON.parse(localStorage.getItem('favoriteFilms'));
        if (favorites) {
            favorites.push(props.movie)
            localStorage.setItem('favoriteFilms',JSON.stringify(favorites))
        }
        else{
            localStorage.setItem('favoriteFilms',JSON.stringify([props.movie]))
        }
        setIsFavorite(true);
    }
    const disLike =()=>{
        const favorites  = JSON.parse(localStorage.getItem('favoriteFilms'));
        if (favorites) {
            let index = favorites.findIndex(x=>x.episode_id===props.movie.episode_id)
            favorites.splice(index,1);
            localStorage.setItem('favoriteFilms',JSON.stringify(favorites))
        }
        else{
            localStorage.setItem('favoriteFilms',JSON.stringify([props.movie]))
        }
        setIsFavorite(false);
    }
    return (
        <div className="movie-card">
            <div className="movie-card-body">
                <div className="title">
                    <h4>{props.movie.title}</h4>
                    <p>
                        <span>{props.movie.director}</span><br />
                        <span>{props.movie.release_date}</span>
                    </p>
                </div>
                <div className="description">
                    <p>{props.movie.opening_crawl}</p>
                </div>
            </div>
            <div className="movie-card-footer">
            
                {
                    isFavorite && <i onClick={disLike} className="fas fa-thumbs-up liked" ></i>
                }
                {
                    !isFavorite && <i onClick={like}  className="fas fa-thumbs-up"></i>
                }
                
            </div>
        </div>
    )
}