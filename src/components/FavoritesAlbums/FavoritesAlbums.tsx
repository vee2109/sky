import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { getAlbums, IEntry } from "../../store/slices/albumsSlice";
import { AlbumCard } from "../Albums/AlbumCard";
import AppHeader from "../AppLayout/AppHeader";
import "../Albums/Card.css";
import {
  favButtonStateChange,
  handleAddOrRemoveFavoritesItem,
  handleFavButton,
} from "../../utils";

export const FavoritesAlbums = () => {
  const [searchValue, setSearchValue] = useState("");
  const albumsStore = useSelector((state: RootState) => state.albums);
  const [favAlbumList, setFavAlbumList] = useState<IEntry[]>([]);
  const [filteredFavAlbumList, setFilteredFavAlbumList] = useState<IEntry[]>(
    []
  );
  const dispatch = useDispatch();

  /**
   * useEffect using to dispatch the getAlbums API if albumsStore is empty
   */
  useEffect(() => {
    albumsStore.albumsResponse.feed.entry.length === 0 && dispatch(getAlbums());
  }, [albumsStore.albumsResponse.feed.entry.length, dispatch]);

  /**
   * second useEffect using for setting the filtered albums list in the favAlbumList state
   */
  useEffect(() => {
    setFavAlbumList((prevEvents) => [
      ...prevEvents,
      ...handleAddOrRemoveFavoritesItem(),
    ]);
  }, [albumsStore]);

  useEffect(() => {
    setFilteredFavAlbumList(favAlbumList);
  }, [favAlbumList]);

  const handleSearchValue = (userInput: string) => {
    setSearchValue(userInput);
    let filteredAlbums: IEntry[] = favAlbumList.filter((name) =>
      name.title.label.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredFavAlbumList(filteredAlbums);
  };
  
  return (
    <div className="container-fluid">
      <AppHeader
        handleSearchValue={handleSearchValue}
        searchValue={searchValue}
      />
      <div className="container">
        <div className="cards">
          <div className="row">
            {filteredFavAlbumList.length > 0 &&
              filteredFavAlbumList.map((entry, index) => (
                <AlbumCard
                  key={index}
                  img={entry["im:image"][entry["im:image"].length - 1]?.label}
                  title={entry.title.label}
                  author={entry["im:artist"].label}
                  amount={entry["im:price"].attributes.amount}
                  currency={entry["im:price"].attributes.currency}
                  albumLength={filteredFavAlbumList.length}
                  id={entry.id.attributes["im:id"]}
                  handleFavButton={() =>
                    handleFavButton(entry.id.attributes["im:id"])
                  }
                  isFavorite={() =>
                    favButtonStateChange(entry.id.attributes["im:id"])
                  }
                  isAlbumFavPage={"favorite"}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
