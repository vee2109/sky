import store from "../store";
import { IEntry } from "../store/slices/albumsSlice";

export const albumsCardClass = (albumLength: number) => {
  switch (albumLength) {
    case 1:
      return "p0 col-sm-12";
    case 2:
      return "p0 col-sm-6";
    case 3:
      return "p0 col-sm-4";
    case 4:
      return "p0 col-sm-3";
    case 5:
      return "p0 col-sm-3";
    default:
      return "p0 col-sm-6 col-md-3 col-lg-2 col-xs-6";
  }
};

/**
 * when user clicking on Add favorite button checking
 * the favId is already exist in array or not based on condition adding and removing the id
 */
var favId: string[] = [];
export const handleFavButton = (id: string) => {
  let favIds: any = localStorage.getItem("favId");
  let favArray = JSON.parse(favIds);
  if (favId.length === 0 && favArray) {
    favId.push(...favArray);
  }
  let currentFavState: boolean = false;
  if (favId.indexOf(id) !== -1) {
    favId = favId.filter(function (item) {
      return item !== id;
    });
    currentFavState = true;
  } else {
    favId.push(id);
  }
  localStorage.setItem("favId", JSON.stringify(favId));
  return currentFavState;
};

export const favButtonStateChange = (favId: string) => {
  let favIds: any = localStorage.getItem("favId");
  let favArray = JSON.parse(favIds);
  return favArray && favArray.indexOf(favId) !== -1 ? false : true;
};

export const handleAddOrRemoveFavoritesItem = () => {
  const stateStore = store.getState();
  let localStoredFavItems: any = localStorage.getItem("favId");
  let localStoreFavArray = JSON.parse(localStoredFavItems);
  let albumData: IEntry[] = [];
  if (localStoreFavArray) {
    localStoreFavArray.map((favId: string) => {
      const album: IEntry[] =
        stateStore.albums.albumsResponse.feed.entry.filter(
          (entry) => entry.id.attributes["im:id"] === favId
        );
      return albumData.push(...album);
    });
  }
  return albumData;
};
