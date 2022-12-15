import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <Link className="navbar-brand" to="/">
                Kelas Tambahan
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/movies">Movies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/customers">Customers</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/buy">Buy</NavLink>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Header;