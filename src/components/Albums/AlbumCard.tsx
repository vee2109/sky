import React from "react";
import { albumsCardClass } from "../../utils";

export interface ICardProps {
  img: string | undefined;
  title: string;
  author: string;
  albumLength: number;
}
export const AlbumCard = (props: ICardProps) => {
  return (
    <div className={albumsCardClass(props.albumLength)}>
      <div className="card">
        <img src={props.img} alt={"img"} />
        <div className="card-body">
          <h2 title={props.title}>{props.title}</h2>
          <h5>{props.author}</h5>
        </div>
      </div>
    </div>
  );
};
