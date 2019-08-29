import axios from 'axios';

export const swapiFilmsApi = () =>{
    return axios.get('https://swapi.co/api/films/');
}