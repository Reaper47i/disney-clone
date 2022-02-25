const API_KEY = import.meta.env.VITE_SECRET_CODE;
const BASE_URL = "https://api.themoviedb.org/3";
const POPULAR_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const TOP_RATED_URL = BASE_URL + "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&" + API_KEY; 
export {POPULAR_URL, TOP_RATED_URL};


