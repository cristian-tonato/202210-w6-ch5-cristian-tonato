import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Games } from "../../games/models/games";
import { GameList } from "./game.list";
import "@testing-library/jest-dom";

describe("Given the GamesList component", () => {
    describe("When we render the component", () => {
        test("then it should display the Game's list", () => {
            const GameMock: Games[] = [
                {
                    id: 1,
                    name: "God of War: Ragnarok",
                    platform: "PS5",
                    price: "",
                    imgUrl: "",
                    ofert: false,
                    detail: ""
                },
            ];
            render(
                <>
                    <Router>
                        <GameList item={GameMock}></GameList>
                    </Router>
                </>
            );
            const element = screen.getByText(/God/i);
            expect(element).toBeInTheDocument();
        });
    });
});
