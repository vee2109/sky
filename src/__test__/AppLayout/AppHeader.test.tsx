import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { AppHeader } from "../../components/AppLayout/AppHeader";

describe("AppHeader", () => {
  test("Should render AppHeader view component", () => {
    render(
      <Router>
        <AppHeader
          searchValue={"test"}
          handleSearchValue={(userInput: string) => jest.fn()}
        />
      </Router>
    );
  });
});
