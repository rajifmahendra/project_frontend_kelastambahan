import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import Banner from '../Components/Banner';
import CardMovie from '../Components/CardMovie';
import useDebounce from '../Hooks/useDebounce';
import LandingPageLayout from '../Layout/LandingPageLayout';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("")

  const debounceSearch = useDebounce(query, query ? 500 : 0)

  const filteredItems = useMemo(() => {
    return movies.filter((item) => {
      return item.title.toLowerCase().includes(debounceSearch.toLowerCase())
    })
  }, [debounceSearch, movies])

  const getDateMovies = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      setMovies(result.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onSearchChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  useEffect(() => {
    getDateMovies();
  }, []);

  return (
    <LandingPageLayout onSearchChange={onSearchChange}>
      <div>
        <Banner movie={movies[0]} />
        <div className="container py-5">
          <h1 className="text-light mb-5">Popular Movies</h1>
          <div className={`row ${filteredItems.length >= 5 ? 'justify-content-center' : 'justify-content-start'}`}>
            {loading ? (
              <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              filteredItems?.map((movie) => (
                <CardMovie key={movie?.id} movie={movie} />
              ))
            )}
          </div>
        </div>
      </div>
    </LandingPageLayout>
  );
};

export default Homepage;
