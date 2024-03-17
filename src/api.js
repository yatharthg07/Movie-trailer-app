const API_KEY = 'e8349c9a4c4237e447b4678e4cb8d7d5';

export function getMovies() {
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => data.results);
}

export function searchMovies(query) {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
    .then(response => response.json())
    .catch(error => {
      console.error('Error searching movies:', error);
      return [];
    });
}

export function getImageUrl(path) {
  return `https://image.tmdb.org/t/p/w500${path}`;
}

export async function getTrailerUrl(movieId) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`);
      const data = await response.json();
      const trailer = data.results.find(video => video.type === 'Trailer');
      if (trailer) {
        return `https://www.youtube.com/embed/${trailer.key}`;
      } else {
        console.log('No trailer found for this movie');
        return null;
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
      return null;
    }
  }

  export async function getNowPlaying() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  }
  
  export async function getPopular() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  }
  
  export async function getTopRated() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  }
  
  export async function getUpcoming() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  }