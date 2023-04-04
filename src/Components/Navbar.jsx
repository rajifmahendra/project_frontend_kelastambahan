import React from 'react';

const Navbar = ({onSearchChange}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <div className="container d-flex justify-content-between">
        <h2 className="navbar-brand">Movie App</h2>
        <form className="d-flex" role="search">
          <input
            className="form-control bg-dark text-light rounded-5"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={onSearchChange}
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
