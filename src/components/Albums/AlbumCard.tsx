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
}
var favId: string[] = [];
export const AlbumCard = (props: ICardProps) => {
  const [isFavorite, setFavorite] = useState<boolean>(false);

  const handleFavButton = (id: string) => {
    if (favId.indexOf(id) !== -1) {
      favId = favId.filter(function (item) {
        return item !== id;
      });
      setFavorite(true);
    } else {
      setFavorite(false);
      favId.push(id);
    }
    localStorage.setItem("favId", JSON.stringify(favId));
  };
  
  const favButtonStateChange = (favId:string) => {
    let favIds: any = localStorage.getItem("favId");
    let favArray = JSON.parse(favIds);
    favArray.indexOf(favId) !== -1 ? setFavorite(false) : setFavorite(true);
  };

  useEffect(()=>{
    favButtonStateChange(props.id);
  },[props.id, isFavorite])
 
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
            { isFavorite ? "Add to favorites" : "Remove from favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};
