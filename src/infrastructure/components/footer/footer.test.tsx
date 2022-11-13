import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("Given Footer component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(<Footer />);
        });
        test("Then it should display COMIC-GAME", () => {
            const element = screen.getByText(/COMIC-GAME/i);
            expect(element).toBeInTheDocument();
        });
    });
});
