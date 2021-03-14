import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

export type AppRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counterState: counterReducer
})

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store