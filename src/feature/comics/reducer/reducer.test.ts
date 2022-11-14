import { Comics } from "..//..//comics/models/comics";
import { ComicsReducer } from "..//..//comics/reducer/reducer.comics";
import { actionTypes } from "./action.types";

describe("Given the function ComicsReducer", () => {
    describe("Given the function ComicsReducer", () => {
        const shopComics: Comics = {
            id: 1,
            name: "Nightwing núm. 14",
            edit: "DC",
            price: "16",
            ofert: false,
            imgUrl: "https://static.fnac-static.com/multimedia/Images/ES/NR/83/bf/78/7913347/1540-1.jpg",
            detail: "",
        };

        let action: { type: string; payload: unknown };
        let state: Array<Comics>;

        describe("When the action is load", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.load,
                    payload: [shopComics],
                };
                state = [];
            });
            test("Then the returned state should be the action payload", () => {
                const result = ComicsReducer(state, action);
                expect(result).toEqual(action.payload);
            });
        });

        describe("When the action is add", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.add,
                    payload: shopComics,
                };
                state = [];
            });
            test("Then the returned state should include the action payload", () => {
                const result = ComicsReducer(state, action);
                expect(result).toContainEqual(action.payload);
            });
        });

        describe("When the action is update", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.update,
                    payload: { ...shopComics, title: "Update Comics" },
                };
                state = [shopComics];
            });
            test("Then the returned state should include the action payload", () => {
                const result = ComicsReducer(state, action);
                expect(result).toContainEqual(action.payload);
            });
        });

        describe("When the action is update and the id is not valid", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.update,
                    payload: {
                        ...shopComics,
                        id: "2",
                        title: "Update Comics",
                    },
                };
                state = [shopComics];
            });
            test("Then the returned state should be the original state", () => {
                const result = ComicsReducer(state, action);
                expect(result).toEqual(state);
            });
        });

        describe("When the action is delete", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.delete,
                    payload: shopComics,
                };
                state = [shopComics];
            });
            test("Then the returned state should not include the action payload", () => {
                const result = ComicsReducer(state, action);
                expect(result).toEqual([]);
            });
        });

        describe("When the action is delete and the id is not valid", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.delete,
                    payload: { ...shopComics, id: "2" },
                };
                state = [shopComics];
            });
            test("Then the returned state should be the original state", () => {
                const result = ComicsReducer(state, action);
                expect(result).toEqual(state);
            });
        });
    });
});
