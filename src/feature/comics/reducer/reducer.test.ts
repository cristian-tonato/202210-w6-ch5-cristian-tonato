import { Games } from "../models/games";
import { GamesReducer } from "./reducer";
import { actionTypes } from "./action.types";

describe("Given the function GamesReducer", () => {
    describe("Given the function GamesReducer", () => {
        const shopGames: Games = {
            id: 1,
            name: "God of War: Ragnarok",
            platform: "PS5",
            price: "79.99",
            ofert: false,
            imgUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
            detail: "",
        };

        let action: { type: string; payload: unknown };
        let state: Array<Games>;

        describe("When the action is load", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.load,
                    payload: [shopGames],
                };
                state = [];
            });
            test("Then the returned state should be the action payload", () => {
                const result = GamesReducer(state, action);
                expect(result).toEqual(action.payload);
            });
        });

        describe("When the action is add", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.add,
                    payload: shopGames,
                };
                state = [];
            });
            test("Then the returned state should include the action payload", () => {
                const result = GamesReducer(state, action);
                expect(result).toContainEqual(action.payload);
            });
        });

        describe("When the action is update", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.update,
                    payload: { ...shopGames, title: "Update Games" },
                };
                state = [shopGames];
            });
            test("Then the returned state should include the action payload", () => {
                const result = GamesReducer(state, action);
                expect(result).toContainEqual(action.payload);
            });
        });

        describe("When the action is update and the id is not valid", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.update,
                    payload: {
                        ...shopGames,
                        id: "2",
                        title: "Update Games",
                    },
                };
                state = [shopGames];
            });
            test("Then the returned state should be the original state", () => {
                const result = GamesReducer(state, action);
                expect(result).toEqual(state);
            });
        });

        describe("When the action is delete", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.delete,
                    payload: shopGames,
                };
                state = [shopGames];
            });
            test("Then the returned state should not include the action payload", () => {
                const result = GamesReducer(state, action);
                expect(result).toEqual([]);
            });
        });

        describe("When the action is delete and the id is not valid", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.delete,
                    payload: { ...shopGames, id: "2" },
                };
                state = [shopGames];
            });
            test("Then the returned state should be the original state", () => {
                const result = GamesReducer(state, action);
                expect(result).toEqual(state);
            });
        });
    });
});
