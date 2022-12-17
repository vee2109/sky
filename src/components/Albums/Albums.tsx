import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { getAlbums, IEntry } from "../../store/slices/albumsSlice";
import { AlbumCard } from "./AlbumCard";
import { AppHeader } from "../AppLayout/AppHeader";
import {
  favButtonStateChange,
  handleFavButton,
  handleSearch,
} from "../../utils";

export const Albums = () => {
  const [albumList, setAlbumList] = useState<IEntry[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useDispatch();
  const albumsStore = useSelector((state: RootState) => state.albums);
  /**
   * first useEffect using to dispatch the getAlbums API
   */
  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  /**
   * second useEffect using to set setAlbumList() useState method
   */
  useEffect(() => {
    albumsStore.albumsResponse.feed.entry.length > 0 &&
      setAlbumList(albumsStore.albumsResponse.feed.entry);
  }, [albumsStore]);

  const handleSearchValue = (userInput: string) => {
    setSearchValue(userInput);
    let searchResult = handleSearch(
      albumsStore.albumsResponse.feed.entry,
      userInput
    );
    setAlbumList(searchResult);
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
            {albumList.length > 0 &&
              albumList.map((entry, index) => (
                <AlbumCard
                  key={index}
                  img={entry["im:image"][entry["im:image"].length - 1]?.label}
                  title={entry.title.label}
                  author={entry["im:artist"].label}
                  amount={entry["im:price"].attributes.amount}
                  currency={entry["im:price"].attributes.currency}
                  albumLength={albumList.length}
                  id={entry.id.attributes["im:id"]}
                  link={entry.link.attributes.href}                     
                  handleFavButton={() =>
                    handleFavButton(entry.id.attributes["im:id"])
                  }
                  isFavorite={() =>
                    favButtonStateChange(entry.id.attributes["im:id"])
                  }
                  isAlbumFavPage={"albums"}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
