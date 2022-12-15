import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  getAlbums,
  requestError,
  setAlbums,
  IAlbumsResponse,
} from "../slices/albumsSlice";

/**
 * Fetch all the Albums
 */
function* fetchAlbumsList() {
  try {
    const response: AxiosResponse<IAlbumsResponse> = yield axios.get(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
    );
    if (response.data) {
      yield put(setAlbums(response.data));
    } else {
      yield put(requestError({ status: 400, message: "Albums are not found, look like Bad Request." }));
    }
  } catch (error) {
    yield put(
      requestError({ status: 500, message: "Albums api not responding!." })
    );
  }
}

export default function* albumsSaga() {
  yield takeLatest(getAlbums.type, fetchAlbumsList);
}
