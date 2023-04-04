import React from 'react';
import { Link } from 'react-router-dom';

const CardMovie = ({ movie }) => {
  const imageUrl = `${process.env.REACT_APP_BASE_IMG_URL}${movie?.backdrop_path}`;
  return (
    <div className="col col-auto text-center text-light">
      <div
        className="bg-transparent shadow-sm text-bg-dark mx-2 p-0 border-0 rounded-3"
        style={{ maxWidth: '200px', height: '100%' }}
      >
        <Link to={`/${movie?.id}`}>
          <img
            src={imageUrl}
            alt="movie"
            className="w-100 rounded-3"
            style={{
              width: '100%',
              height: '350px',
              objectFit: 'cover',
            }}
          />
        </Link>
        <p className="mt-2 m-0 h5">{movie?.title}</p>
        <p className="text-warning">{movie?.release_date}</p>
      </div>
    </div>
  );
};

export default CardMovie;
