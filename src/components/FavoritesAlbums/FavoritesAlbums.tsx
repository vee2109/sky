import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { getAlbums, IEntry } from "../../store/slices/albumsSlice";
import { AlbumCard } from "../Albums/AlbumCard";
import AppHeader from "../AppLayout/AppHeader";
import "../Albums/Card.css";
import {
  favButtonStateChange,
  handleRemoveFavoritesItem,
  handleFavButton,
  handleSearch,
} from "../../utils";
import LoadingSpinner from "../AppLayout/LoadingSpinner/LoadingSpinner";

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
   * and setting updated favorite albums from the localStorage
   */
  useEffect(() => {
    albumsStore.albumsResponse.feed.entry.length === 0 && dispatch(getAlbums());
    setFavAlbumList(handleRemoveFavoritesItem());
  }, [albumsStore.albumsResponse.feed.entry.length, dispatch]);

  useEffect(() => {
    setFilteredFavAlbumList(favAlbumList);
  }, [favAlbumList]);

  const handleFavSearchValue = (userInput: string) => {
    setSearchValue(userInput);
    let searchResult = handleSearch(favAlbumList, userInput);
    setFilteredFavAlbumList(searchResult);
  };

  const handleFavRemoveButton = () => {
    setFavAlbumList(handleRemoveFavoritesItem());
  };

  return (
    <div className="container-fluid">
      <AppHeader
        handleSearchValue={handleFavSearchValue}
        searchValue={searchValue}
      />
      {albumsStore.isLoadingAlbum ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
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
                    link={entry.link.attributes.href}
                    handleFavButton={() =>
                      handleFavButton(entry.id.attributes["im:id"])
                    }
                    isFavorite={() =>
                      favButtonStateChange(entry.id.attributes["im:id"])
                    }
                    handleFavRemoveButton={handleFavRemoveButton}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
