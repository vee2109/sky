import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { getAlbums, IEntry } from "../../store/slices/albumsSlice";
import { AlbumCard } from "./AlbumCard";
import "./Card.css";
import { SearchAlbum } from "./SearchAlbum";

export const Albums = () => {
  const [albumList, setAlbumList] = useState<IEntry[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const albumsStore = useSelector((state: RootState) => state.albums);
  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  useEffect(() => {
    albumsStore.albumsResponse.feed.entry.length > 0 &&
      setAlbumList(albumsStore.albumsResponse.feed.entry);
  }, [albumsStore.albumsResponse.feed.entry]);

  const handleSearchValue = (userInput: string) => {
    setSearchValue(userInput);
    setAlbumList(
      albumsStore.albumsResponse.feed.entry.filter((name) =>
        name.title.label.toLowerCase().includes(userInput.toLowerCase())
      )
    );
  };
  return (
    <div className="container-fluid">
      <div className="mx-auto order-0">
        <SearchAlbum
          handleSearchValue={handleSearchValue}
          searchValue={searchValue}
        />
      </div>
      <div className="cards">
        <div className="row">
          {albumList.length > 0 &&
            albumList.map((entry, index) => (
              <AlbumCard
                key={index}
                img={entry["im:image"][entry["im:image"].length - 1]?.label}
                title={entry.title.label}
                author={entry["im:artist"].label}
                albumLength={albumList.length}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
