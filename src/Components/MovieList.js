import React, { useState, useEffect } from 'react';

function MovieList() {
  const [movieData, setMovieData] = useState([]);
  const apiUrl = 'https://hoblist.com/api/movieList';

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const params = {
      category: 'movies',
      language: 'kannada',
      genre: 'all',
      sort: 'voting'
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      });

      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }

      const data = await response.json();
      setMovieData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Kannada Movie List</h2>
      <ul>
        {movieData.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
