// Trailer.js
import React, { useEffect, useState } from 'react';
import { getTrailerUrl } from './api';

function Trailer({ movie }) {
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      const url = await getTrailerUrl(movie.id);
      setTrailerUrl(url);
    };

    fetchTrailer();
    return () => setTrailerUrl(null);
  }, [movie.id]);

  return (
    <div className="Trailer">
      {trailerUrl && (
        <>
          <h2>Trailer for {movie.title}</h2>
          <iframe
            src={trailerUrl}
            title={movie.title}
            width="560"
            height="315"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </>
      )}
    </div>
  );
}

export default Trailer;
