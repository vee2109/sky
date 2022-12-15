import React from "react";
import "./Header.css";
export const AppHeader = (props: any) => {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              Sky Albums
            </a>
          </div>
          <div className="mx-auto order-0">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default AppHeader;
