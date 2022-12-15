import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { getAlbums } from "../../store/slices/albumsSlice";
import { AlbumCard } from "./AlbumCard";
import "./Card.css";

export const Albums = () => {
  const dispatch = useDispatch();
  const albumsStore = useSelector((state: RootState) => state.albums);
  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);
  console.log(
    albumsStore.albumsResponse.feed.entry.length > 0 &&
      albumsStore.albumsResponse
  );
  return (
    <div className="container-fluid">
      <div className="cards">
        <div className="row">
          {albumsStore.albumsResponse.feed.entry.length > 0 &&
            albumsStore.albumsResponse.feed.entry.map((entry, index) => (
              <AlbumCard
                key={index}
                img={entry["im:image"][entry["im:image"].length - 1]?.label}
                title={entry.title.label}
                author={entry["im:artist"].label}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
