import React from "react";

export interface ICardProps {
  img: string | undefined;
  title: string;
  author: string;
}
export const AlbumCard = (props: ICardProps) => {
  return (
    <div className="col-sm-3 col-md-2 col-lg-2 col-xm-3">
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
