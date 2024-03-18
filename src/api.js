const API_KEY = 'e8349c9a4c4237e447b4678e4cb8d7d5'; // API key for accessing TMDB API

// Function to fetch popular movies
export async function getMovies() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch popular movies');
    }
    const data = await response.json(); // Parse response as JSON
    return data.results; // Extract results array from response data and return
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return []; // Return empty array in case of error
  }
}

// Function to search for movies based on query
export async function searchMovies(query) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
    if (!response.ok) {
      throw new Error('Failed to search movies');
    }
    return await response.json(); // Parse response as JSON and return
  } catch (error) {
    console.error('Error searching movies:', error);
    return []; // Return empty array in case of error
  }
}

// Function to get full image URL from image path
export function getImageUrl(path) {
  return `https://image.tmdb.org/t/p/w500${path}`; // Construct and return full image URL
}

// Function to get trailer URL for a movie by its ID
export async function getTrailerUrl(movieId) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch trailer');
    }
    const data = await response.json(); // Parse response as JSON
    const trailer = data.results.find(video => video.type === 'Trailer'); // Find trailer video in results
    if (trailer) {
      return `https://www.youtube.com/embed/${trailer.key}`; // Return trailer URL if found
    } else {
      console.log('No trailer found for this movie');
      return null; // Return null if no trailer found
    }
  } catch (error) {
    console.error('Error fetching trailer:', error);
    return null; // Return null in case of error
  }
}

// Function to get now playing movies
export async function getNowPlaying() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch now playing movies');
    }
    return await response.json(); // Parse response as JSON and return
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    return []; // Return empty array in case of error
  }
}

// Function to get popular movies
export async function getPopular() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch popular movies');
    }
    return await response.json(); // Parse response as JSON and return
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return []; // Return empty array in case of error
  }
}

// Function to get top rated movies
export async function getTopRated() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch top rated movies');
    }
    return await response.json(); // Parse response as JSON and return
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    return []; // Return empty array in case of error
  }
}

// Function to get upcoming movies
export async function getUpcoming() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch upcoming movies');
    }
    return await response.json(); // Parse response as JSON and return
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return []; // Return empty array in case of error
  }
}
