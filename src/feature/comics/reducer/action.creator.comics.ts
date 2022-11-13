import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "./action.types";
import { Comics } from "..//..//comics/models/comics";

export const loadActionCreator = createAction<Array<Comics>>(actionTypes.load);

export const addActionCreator = createAction<Comics>(actionTypes.add);

export const updateActionCreator = createAction<Comics>(actionTypes.update);

export const deleteActionCreator = createAction<Comics>(actionTypes.delete);
