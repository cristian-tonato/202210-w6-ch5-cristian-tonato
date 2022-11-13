import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "./action.types";
import { Games } from "../models/games";

export const loadActionCreator = createAction<Array<Games>>(
    actionTypes.load
);

export const addActionCreator = createAction<Games>(actionTypes.add);

export const updateActionCreator = createAction<Games>(actionTypes.update);

export const deleteActionCreator = createAction<Games>(actionTypes.delete);
