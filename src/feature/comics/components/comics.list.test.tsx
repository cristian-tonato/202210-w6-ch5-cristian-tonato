import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Comics } from "../../comics/models/comics";
import { ComicsList } from "./comics.list";
import "@testing-library/jest-dom";

describe("Given the Comics List component", () => {
    describe("When we render the component", () => {
        test("then it should display the Game's list", () => {
            const ComicMock: Comics[] = [
                {
                    id: 1,
                    name: "Nightwing núm. 14",
                    edit: "",
                    price: "",
                    imgUrl: "",
                    ofert: false,
                    detail: "",
                },
            ];
            render(
                <>
                    <Router>
                        <ComicsList item={ComicMock}></ComicsList>
                    </Router>
                </>
            );
            const element = screen.getByText(/Nightwing/i);
            expect(element).toBeInTheDocument();
        });
    });
});
