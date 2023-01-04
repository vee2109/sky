import store from "../store";
import { IEntry } from "../store/slices/albumsSlice";
var favId: string[] = [];
export interface IidAttribute {
  id: { attributes: { "im:id": string } };
}
export interface IEntryTitle {
  title: { label: string };
  "im:artist": { label: string };
  "im:price": { attributes: { amount: number; currency: string } };
}
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

export const handleFavButton = (id: string) => {
  let currentFavState: boolean = false;
  let favIds: any = localStorage.getItem("favId");
  let favArray = JSON.parse(favIds);
  
  if (favId.length === 0 && favArray) {
    favId.push(...favArray);
  }

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

export const handleRemoveFavoritesItem = () => {
  const stateStore = store.getState();
  let localStoredFavItems: any = localStorage.getItem("favId");
  let localStoreFavArray = JSON.parse(localStoredFavItems);
  let albumData: IEntry[] = [];
  if (localStoreFavArray) {
    localStoreFavArray.map((favId: string) => {
      const album: IEntry[] =
        stateStore.albums.albumsResponse.feed.entry.filter(
          (entry: IidAttribute) => entry.id.attributes["im:id"] === favId
        );
      return albumData.push(...album);
    });
  }

  return albumData;
};

export const handleSearch = (fromSearchEntry: IEntry[], userInput: string) => {
  let searchResult: IEntry[] = fromSearchEntry.filter(
    (name: IEntryTitle) =>
      name.title.label.toLowerCase().includes(userInput.toLowerCase()) ||
      name["im:artist"].label.toLowerCase().includes(userInput.toLowerCase()) ||
      name["im:price"].attributes.amount.toString().includes(userInput)
  );

  return searchResult;
};

/* callback example
// slice 

export const recentExecutionAction = (type: string) =>
  createAction(
    type,
    (buildingConfig, callBack: (buildingConfig: IBuildingDtIds[]) => void): Payload<IRecentBuildingIdPayload> => {
      return {
        payload: {
          buildingConfig,
          callBack,
        },
      };
    }
  );

export const getRecentExecutedBuildings = recentExecutionAction("execute/getRecentExecutedBuildings");

  extraReducers: (builder) => {
    builder      
      .addCase(getRecentExecutedBuildings, (state, action) => {
        state.isMakingRecentExecutionRequest = true;
      })      
  },

  /// saga method.

  function* recentExecutedBuildings(action: PayloadAction<IRecentBuildingIdPayload>) {
  const { buildingConfig, callBack } = action.payload;
  try {
    const response: AxiosResponse<IBuildingDtIds[]> = yield apiClient.post(
      apiEndPoints.getRecentExecutedBuildings,
      buildingConfig
    );
    callBack(response.data);
    yield put(setRecentExecutedBuildings(response.data));
  } catch (error) {   
    yield put(resetRecentExecutedBuildings());
  }
}

// component dispatch 

dispatch(
        getRecentExecutedBuildings(buildingPayload, (response) => {          
          response.length
            ? (skippedBuildingPayload = getBuildingPayload().buildingConfig.filter(({ buildingDtId: bid1 }) =>
                response.some(({ buildingDtId: bid2 }) => bid1 === bid2)
              ))
            : dispatch(resetRecentExecutedBuildings());
                    
        })
      );
      */
