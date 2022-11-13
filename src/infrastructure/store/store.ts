import { ArticulesReducer } from "./../../feature/reducer/reducer";
import { configureStore } from "@reduxjs/toolkit";

export const appStore = configureStore({
    reducer: { articules: ArticulesReducer },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
