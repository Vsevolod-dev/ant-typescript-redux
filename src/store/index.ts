import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, { ThunkDispatch } from 'redux-thunk'
import reducers from './reducers'
import { AuthState } from "./reducers/auth/types";

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch