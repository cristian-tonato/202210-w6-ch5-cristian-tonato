import { ShopGames } from "./games.api";
import { Games } from "./../models/games";

describe("Given component Shop games", () => {
    describe("When we instantiate it", () => {
        let service: ShopGames;
        beforeEach(() => {
            service = new ShopGames();
        });

        test(`Then if createError() is called, 
            it should return throw an error`, async () => {
            const error = service.createError(
                new Response("Error", {
                    status: 400,
                    statusText: "error",
                })
            );
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(error).toEqual(result);
        });

        test(`Then if we use getAll() 
            it should return a Promise of an Array of Games`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });

        test("Then if we use update() it should return a Promise of an Array of Games", async () => {
            const gamesMock: Games = {
                id: 1,
                name: "Batman",
                detail: "",
                platform: "PS5",
                price: "",
                imgUrl: "",
                ofert: false,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([gamesMock]),
            });
            const result = await service.update({ title: "God" });
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([gamesMock]);
        });
    });
});
