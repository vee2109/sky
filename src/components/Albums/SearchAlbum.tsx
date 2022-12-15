import React from "react";

export interface ISearchProps {
  searchValue: any;
  handleSearchValue: (userInput: string) => void;
}
export const SearchAlbum = (props: ISearchProps) => {
  return (
    <div className="form-group has-search search-box">
      <span className="fa fa-search form-control-feedback"></span>
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={props.searchValue}
        onChange={(e) => props.handleSearchValue(e.target.value)}
      />
    </div>
  );
};
