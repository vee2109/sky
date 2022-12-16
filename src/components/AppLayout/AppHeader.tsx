import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "../Albums/Card.css";
export interface ISearchProps {
  searchValue: any;
  handleSearchValue: (userInput: string) => void;
}

export const AppHeader = (props: ISearchProps) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top nav-color">
        <div className="container-fluid">
          <Link className="navbar-brand flex-grow-1" to="/">
            Sky Albums
          </Link>
          <div className="flex-grow-1 d-flex">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={props.searchValue}
              onChange={(e) => props.handleSearchValue(e.target.value)}
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link className="nav-item nav-link fav-link" to="/favorites">
                Favorites
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
