import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import LandingPageLayout from '../Layout/LandingPageLayout';

const Detail = (props) => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;
  const imageUrl = `${process.env.REACT_APP_BASE_IMG_URL}${movie?.backdrop_path}`;

  const getDateMovies = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      setMovie(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDateMovies();
  }, []);
  return (
    <LandingPageLayout>
      {loading ? (
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
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
            <div className="d-flex w-100 flex-column justify-content-center text-light">
              <h1 className="display-1">{movie?.title}</h1>
              <p>Release Date {movie?.release_date}</p>
              <div className="d-flex">
                {movie?.genres?.map((genre) => (
                  <span className="mx-1 text-warning" key={genre.name}>
                    {genre.name}
                  </span>
                ))}
              </div>
              <p className="mt-3">{movie?.tagline}</p>
              <h3 className="text-warning">Overview</h3>
              <p>{movie?.overview}</p>
            </div>
          </div>
        </div>
      )}
    </LandingPageLayout>
  );
};

export default Detail;
