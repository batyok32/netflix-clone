const API_KEY = "3f1d09b703564b3c0c5c22cb53ba3fa5";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en_US`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`, 
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en_US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests