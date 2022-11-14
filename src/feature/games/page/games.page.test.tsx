import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import GamesPage from "./games.page";


describe("Given GamesPage component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(
                <Router>
                    <GamesPage></GamesPage>
                </Router>
            );
        });
        test("Then it should display", () => {
            const element = screen.getByText(/GAMES/);
            expect(element).toBeInTheDocument();
        });
    });
});
