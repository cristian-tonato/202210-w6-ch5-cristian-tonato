import { ShopComics } from "..//..//comics/services/comics.api";
import { Comics } from "./../..//comics/models/comics";

describe("Given component Shop Comics", () => {
    describe("When we instantiate it", () => {
        let service: ShopComics;
        beforeEach(() => {
            service = new ShopComics();
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
            it should return a Promise of an Array of Comics`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });

        test("Then if we use update() it should return a Promise of an Array of Comics", async () => {
            const comicsMock: Comics = {
                id: 1,
                name: "Batman",
                detail: "",
                edit: "",
                price: "",
                imgUrl: "",
                ofert: false,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([comicsMock]),
            });
            const result = await service.update({ title: "comics Cactus" });
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([comicsMock]);
        });
    });
});
