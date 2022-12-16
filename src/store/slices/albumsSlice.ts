import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Payload<T> = Omit<PayloadAction<T>, "type">;
export interface IAlbumInitialState {
  isLoadingAlbum: boolean;
  albumsResponse: IAlbumsResponse;
  error: IErrorResponse;
}

export interface IAlbumsResponse {
  feed: IAlbumsEntryResponse;
}

export interface IAlbumsEntryResponse {
  entry: IEntry[];
}

export interface IEntry {
  category: { attributes: { "im:id": string; label: string; scheme: string } };
  id: { label: string; attributes: { "im:id": string } };
  "im:artist": { label: string };
  "im:image": IImageArray[];
  "im:name": { label: string };
  "im:price": { attributes: { amount: number; currency: string } };
  link: { attributes: { href: string } };
  title: { label: string };
}

export interface IImageArray {
  label: string;
}

export interface IErrorResponse {
  status?: number;
  message: string;
}
export const initialAlbumsResponse = {
  feed: { entry: [] },
};

export const initialErrorInfo: IErrorResponse = {
  message: "",
};

const initialState: IAlbumInitialState = {
  isLoadingAlbum: false,
  albumsResponse: initialAlbumsResponse,
  error: initialErrorInfo,
};

/**
 * Albums slice
 * Create actions and update store
 */
const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    getAlbums(state) {
      state.isLoadingAlbum = true;
    },
    requestError(state, action: Payload<IErrorResponse>) {
      state.error.message = action.payload.message;
    },
    setAlbums(state, action: Payload<IAlbumsResponse>) {
      state.isLoadingAlbum = false;
      state.albumsResponse.feed = action.payload.feed;
    },
  },
});

export const { getAlbums, requestError, setAlbums } = albumSlice.actions;

export default albumSlice.reducer;
