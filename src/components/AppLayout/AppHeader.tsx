import React from "react";
import "./Header.css";
export const AppHeader = (props: any) => {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              Sky
            </a>
          </div>          
        </div>
      </nav>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default AppHeader;
