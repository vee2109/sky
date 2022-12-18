import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "../Albums/Card.css";
export interface ISearchProps {
  searchValue?: any;
  handleSearchValue: (userInput: string) => void;
}

export const AppHeader = (props: ISearchProps) => {
  const [toggleState, setToggleState] = useState<boolean>(false);
  const setToggle = () => {
    setToggleState(!toggleState);
  };

  return (
    <header>
      <nav className="navbar navbar-default "></nav>
      <nav className="navbar navbar-light fixed-top navbar-expand-md bg-faded justify-content-center sky-header">
        <Link className="navbar-brand d-flex w-50 mr-auto" to="/">
          Sky Albums
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar3"
          onClick={() => setToggle()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            (toggleState ? "show " : "") + "navbar-collapse collapse w-100"
          }
          id="collapsingNavbar3"
        >
          <ul className="navbar-nav w-100 justify-content-center">
            <li className="nav-item active">
              <input
                className="form-control mr-sm-2 navbar-search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={props.searchValue}
                onChange={(e) => props.handleSearchValue(e.target.value)}
              />
            </li>
          </ul>
          <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
            <li className="nav-item">
              <Link className="nav-link fav-link" to="/favorites">
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
