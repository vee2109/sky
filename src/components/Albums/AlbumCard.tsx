import React, { useEffect, useState } from "react";
import { albumsCardClass } from "../../utils";

export interface ICardProps {
  img: string | undefined;
  title: string;
  author: string;
  amount: number;
  currency: string;
  albumLength: number;
  id: string;
  handleFavButton: (id: string) => boolean;
  isFavorite: (id: string) => boolean;
  isAlbumFavPage: string;
}
export const AlbumCard = (props: ICardProps) => {
  const [isFavorite, setFavorite] = useState<boolean>(false);
  // const albumsStore = useSelector((state: RootState) => state.albums);
  const handleFavoriteButton = (id: string) => {
    setFavorite(props.handleFavButton(id));
  };

  /**
   *
   * On page load checking any favorite album are there in local storage
   * and changing the state to display the fav button text.
   *
   */
  useEffect(() => {
    setFavorite(props.isFavorite(props.id));
  }, [props]);

  return (
    <div className={albumsCardClass(props.albumLength)}>
      <div className="card">
        <img src={props.img} alt={"img"} />
        <div className="card-body">
          <h2 title={props.title}>{props.title}</h2>
          <h5 title={props.author}>{props.author}</h5>
          <p>
            <span>{props.amount}</span>
            <span>{props.currency}</span>
          </p>
          {props.isAlbumFavPage !== "favorite" ? (
            <button
              type="submit"
              onClick={() => handleFavoriteButton(props.id)}
              className="btn btn-primary"
            >
              {isFavorite ? "Add to favorites" : "Remove from favorites"}
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
