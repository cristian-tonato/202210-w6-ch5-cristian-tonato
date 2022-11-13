import { Articules } from "./../models/articules";
import { ArticulesReducer } from "./reducer";
import { actionTypes } from "./action.types";

describe("Given the function articulesReducer", () => {
    describe("Given the function ArticulesReducer", () => {
        const shopArticules: Articules = {
            id: 1,
            name: "God of War: Ragnarok",
            platform: "PS5",
            price: "79.99",
            ofert: false,
            imgUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
        };

        let action: { type: string; payload: unknown };
        let state: Array<Articules>;

        describe("When the action is load", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.load,
                    payload: [shopArticules],
                };
                state = [];
            });
            test("Then the returned state should be the action payload", () => {
                const result = ArticulesReducer(state, action);
                expect(result).toEqual(action.payload);
            });
        });

        describe("When the action is add", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.add,
                    payload: shopArticules,
                };
                state = [];
            });
            test("Then the returned state should include the action payload", () => {
                const result = ArticulesReducer(state, action);
                expect(result).toContainEqual(action.payload);
            });
        });

        describe("When the action is update", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.update,
                    payload: { ...shopArticules, title: "Update articules" },
                };
                state = [shopArticules];
            });
            test("Then the returned state should include the action payload", () => {
                const result = ArticulesReducer(state, action);
                expect(result).toContainEqual(action.payload);
            });
        });

        describe("When the action is update and the id is not valid", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.update,
                    payload: {
                        ...shopArticules,
                        id: "2",
                        title: "Update articules",
                    },
                };
                state = [shopArticules];
            });
            test("Then the returned state should be the original state", () => {
                const result = ArticulesReducer(state, action);
                expect(result).toEqual(state);
            });
        });

        describe("When the action is delete", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.delete,
                    payload: shopArticules,
                };
                state = [shopArticules];
            });
            test("Then the returned state should not include the action payload", () => {
                const result = ArticulesReducer(state, action);
                expect(result).toEqual([]);
            });
        });

        describe("When the action is delete and the id is not valid", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.delete,
                    payload: { ...shopArticules, id: "2" },
                };
                state = [shopArticules];
            });
            test("Then the returned state should be the original state", () => {
                const result = ArticulesReducer(state, action);
                expect(result).toEqual(state);
            });
        });
    });
});
