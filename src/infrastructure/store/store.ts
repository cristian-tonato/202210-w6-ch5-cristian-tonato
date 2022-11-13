import { GamesReducer } from "../../feature/games/reducer/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { ComicsReducer } from "../../feature/comics/reducer/reducer.comics";

export const appStore = configureStore({
    reducer: { games: GamesReducer,comics: ComicsReducer}
    
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
