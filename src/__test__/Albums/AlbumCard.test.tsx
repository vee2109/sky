import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { AlbumCard } from "../../components/Albums/AlbumCard";

describe("AlbumCard", () => {
  test("Should render AlbumCard view component", () => {
    render(
      <Router>
        <AlbumCard
          key={1}
          img={"https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/4f/aa/31/4faa316b-d7c0-4e39-64ca-3aeb30308244/22UMGIM94809.rgb.jpg/170x170bb.png"}
          title={"A Family Christmas - Andrea Bocelli, Matteo"}
          author={"ANDREA BOCELLI, MATTEO"}
          amount={9.99}
          currency={"USD"}
          albumLength={2}
          id={"123456"}          
        />
      </Router>
    );
  });
});
