import React from "react";
import { albumsCardClass } from "../../utils";

export interface ICardProps {
  img: string | undefined;
  title: string;
  author: string;
  amount: number;
  currency: string;
  albumLength: number;
  id: string;
}
var favId: string[] = [];
export const AlbumCard = (props: ICardProps) => {
  const handleFavButton = (id: string) => {
    if (favId.indexOf(id) !== -1) {
      favId = favId.filter(function (item) {
        return item !== id;
      });
    } else {
      favId.push(id);
    }
    localStorage.setItem("favId", JSON.stringify(favId));
  };
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
          <button
            type="submit"
            onClick={() => handleFavButton(props.id)}
            className="btn btn-primary"
          >
            Add to favorites
          </button>
        </div>
      </div>
    </div>
  );
};
