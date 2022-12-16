import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { FavoritesAlbums } from "../../components/FavoritesAlbums/FavoritesAlbums";


const mockStore = configureStore();
function setupStore() {
  return mockStore({
    albums: {
      isLoadingAlbum: false,
      albumsResponse: { feed: { entry: [] } },
      error: { message: "" },
    },
  });
}
describe("FavoritesAlbums", () => {
    test("Should render FavoritesAlbums view component with store", () => {
      const store = setupStore();
      render(
        <Provider store={store}>
          <Router>
            <FavoritesAlbums />
          </Router>
        </Provider>
      );
    });
  });
  