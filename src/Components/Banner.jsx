import React from 'react';

const Banner = ({ movie }) => {
  const imageUrl = `${process.env.REACT_APP_BASE_IMG_URL}${movie?.backdrop_path}`
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        borderBottomLeftRadius: '3rem',
        borderBottomRightRadius: '3rem',
        boxShadow: '0 5px 5px yellow',
      }}
    >
      <div className="container d-flex flex-column flex-sm-row justify-content-between mt-5 p-5">
        <div className="d-flex w-100">
          <img
            src={imageUrl}
            alt="banner"
            className="w-100"
            style={{
              height: '600px',
              objectFit: 'contain',
              objectPosition: 'left',
            }}
          />
        </div>
        <div className='d-flex w-100 flex-column justify-content-center text-light'>
          <h1 className='display-1'>{movie?.title}</h1>
          <p>Release Date {movie?.release_date}</p>
          <h3 className='text-warning'>Overview</h3>
          <p>{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
