const API_KEY = import.meta.env.VITE_SECRET_CODE;
const BASE_URL = "https://api.themoviedb.org/3";
const POPULAR_URL =
  BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const TOP_RATED_URL =
  BASE_URL +
  "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&" +
  API_KEY;
const New_URL =
  BASE_URL +
  "/discover/movie?primary_release_date.gte=2021-01-01&primary_release_date.lte=2022-10-01&page=2&" +
  API_KEY;

const HIT_URL =
  BASE_URL +
  "/discover/movie?anguage=en-US&sort_by=revenue.desc&page=1&&" +
  API_KEY;

const DOCU_URL =
  BASE_URL +
  "/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&page=2&with_genres=99&" +
  API_KEY;

const NATURE_URL =
  BASE_URL +
  "/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=7521&" +
  API_KEY;

const ACTION_URL =
  BASE_URL +
  "/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28%2C12&" +
  API_KEY;

export {
  POPULAR_URL,
  TOP_RATED_URL,
  New_URL,
  HIT_URL,
  DOCU_URL,
  NATURE_URL,
  ACTION_URL,
};

// { "genres": [
//         { "id": 28, "name": "Action" },
//         { "id": 12, "name": "Adventure" },
//         { "id": 16, "name": "Animation" },
//         { "id": 35, "name": "Comedy" },
//         { "id": 80, "name": "Crime" },
//         { "id": 99, "name": "Documentary" },
//         { "id": 18, "name": "Drama" },
//         { "id": 10751, "name": "Family" },
//         { "id": 14, "name": "Fantasy" },
//         { "id": 36, "name": "History" },
//         { "id": 27, "name": "Horror" },
//         { "id": 10402, "name": "Music" },
//         { "id": 9648, "name": "Mystery" },
//         { "id": 10749, "name": "Romance" },
//         { "id": 878, "name": "Science Fiction" },
//         { "id": 10770, "name": "TV Movie" },
//         { "id": 53, "name": "Thriller" },
//         { "id": 10752, "name": "War" },
//         { "id": 37, "name": "Western" }
//     ]
// }
