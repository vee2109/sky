import React from "react";
import {
  render /* fireEvent, waitFor, screen */,
} from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Albums } from "../../components/Albums/Albums";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

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

describe("Albums", () => {
  test("Should render Albums view component with store", () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <Router>
          <Albums />
        </Router>
      </Provider>
    );
  });
});
