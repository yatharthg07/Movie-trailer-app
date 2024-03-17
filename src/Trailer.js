import React, { useEffect, useState } from 'react';
import { getTrailerUrl } from './api';

function Trailer({ movie }) {
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchTrailer = async () => {
      const url = await getTrailerUrl(movie.id);
      setTrailerUrl(url);
      setIsLoading(false); 
    };

    fetchTrailer();
    return () => setTrailerUrl(null);
  }, [movie.id]);

  return (
    <div className="TrailerContainer">
      {isLoading ? (
        <div>Loading...</div> 
      ) : (
        trailerUrl ? ( 
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
        ) : (
          <img src='novideo.jpg' alt="Dummy video" style={{ width: '100%', borderRadius: '10px' }} />
        )
      )}
    </div>
  );
}

export default Trailer;
