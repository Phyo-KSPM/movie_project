import axios from "axios";


export const api_key : string = 'c46d50b93406201011621935eecbd89b';

export const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})