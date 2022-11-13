import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "./action.types";
import { Articules } from "../models/articules";

export const loadActionCreator = createAction<Array<Articules>>(
    actionTypes.load
);

export const addActionCreator = createAction<Articules>(actionTypes.add);

export const updateActionCreator = createAction<Articules>(actionTypes.update);

export const deleteActionCreator = createAction<Articules>(actionTypes.delete);
