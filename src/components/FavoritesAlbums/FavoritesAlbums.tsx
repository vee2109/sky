import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { getAlbums, IEntry } from "../../store/slices/albumsSlice";
import { AlbumCard } from "../Albums/AlbumCard";
import AppHeader from "../AppLayout/AppHeader";
export const FavoritesAlbums = () => {
  const [searchValue, setSearchValue] = useState("");
  const albumsStore = useSelector((state: RootState) => state.albums);
  const [favAlbumList, setFavAlbumList] = useState<IEntry[]>([]);
  const dispatch = useDispatch();
  /**
   * first useEffect using to dispatch the getAlbums API
   */
  useEffect(() => {
    albumsStore.albumsResponse.feed.entry.length === 0 && dispatch(getAlbums());
  }, [albumsStore.albumsResponse.feed.entry.length, dispatch]);

  useEffect(() => {
    var storedNames: any = localStorage.getItem("favId");
    storedNames &&
      JSON.parse(storedNames).map((favId: string) => {
        const albums = albumsStore.albumsResponse.feed.entry.filter(
          (entry) => entry.id.attributes["im:id"] === favId
        );
        return setFavAlbumList((prevEvents) => [...prevEvents, ...albums]);
      });
  }, [albumsStore]);
  const handleSearchValue = (userInput: string) => {
    setSearchValue(userInput);
    setFavAlbumList(
      favAlbumList.filter((name) =>
        name.title.label.toLowerCase().includes(userInput.toLowerCase())
      )
    );
  };
  return (
    <>
      <AppHeader
        handleSearchValue={handleSearchValue}
        searchValue={searchValue}
      />

      <div className="cards">
        <div className="row">
          {favAlbumList.length > 0 &&
            favAlbumList.map((entry, index) => (
              <AlbumCard
                key={index}
                img={entry["im:image"][entry["im:image"].length - 1]?.label}
                title={entry.title.label}
                author={entry["im:artist"].label}
                amount={entry["im:price"].attributes.amount}
                currency={entry["im:price"].attributes.currency}
                albumLength={favAlbumList.length}
                id={entry.id.attributes["im:id"]}
              />
            ))}
        </div>
      </div>
    </>
  );
};