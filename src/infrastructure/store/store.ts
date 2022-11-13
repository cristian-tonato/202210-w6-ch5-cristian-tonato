import { GamesReducer } from "../../feature/games/reducer/reducer";
import { configureStore } from "@reduxjs/toolkit";

export const appStore = configureStore({
    reducer: { games: GamesReducer },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
