import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState
import { getTrailerUrl } from './api'; // Import getTrailerUrl function from api module

function Trailer({ movie }) {
  // State to store the trailer URL and loading status
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to fetch trailer URL
    const fetchTrailer = async () => {
      try {
        // Fetch trailer URL using the movie ID
        const url = await getTrailerUrl(movie.id);
        setTrailerUrl(url); // Set trailer URL in state
        setIsLoading(false); // Set loading state to false
      } catch (error) {
        console.error('Error fetching trailer:', error);
        setIsLoading(false); // Set loading state to false in case of error
      }
    };

    fetchTrailer(); // Call fetchTrailer function
    // Cleanup function to clear trailerUrl state when component unmounts or movie ID changes
    return () => setTrailerUrl(null);
  }, [movie.id]); // Depend on movie ID to trigger fetchTrailer on movie change

  return (
    <div className="TrailerContainer">
      {isLoading ? ( // Show loading message if still loading
        <div>Loading...</div>
      ) : trailerUrl ? ( // If trailer URL exists
        <div className="Trailer">
          <h2 style={{ marginBottom: '20px' }}>Trailer for {movie.title}</h2>
          <iframe
            src={trailerUrl}
            height="300"
            title={movie.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : ( // If no trailer URL, show dummy video
        <img src={process.env.PUBLIC_URL + '/novideo.jpg'} alt="Dummy video" style={{ width: '300px', borderRadius: '10px' }} />
      )}
    </div>
  );
}

export default Trailer; // Export Trailer component
