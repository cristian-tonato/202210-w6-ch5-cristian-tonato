import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../src/infrastructure/store/store";
import { useShopComics } from "../../comics/hooks/use.shop.games";
import { Comics } from "../../comics/models/comics";
import { ComicItem } from "./comics.item";

jest.mock("../../comics/hooks/use.shop.games");

describe("Given ComicsItem component", () => {
    describe("When we render the component", () => {
        test("Then it should display", async () => {
            const ComicsMock: Comics = {
                id: 1,
                name: "Nightwing núm. 14",
                edit:"",
                price: "",
                imgUrl: "",
                ofert: false,
                detail: "",
            };

            (useShopComics as jest.Mock).mockReturnValue({
                products: [ComicsMock],
            });

            render(
                <Router>
                    <Provider store={appStore}>
                        <ComicItem item={ComicsMock} />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/Nightwing/i);
            expect(element).toBeInTheDocument();
        });
    });
});
