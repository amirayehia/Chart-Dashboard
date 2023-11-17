import { configureStore } from "@reduxjs/toolkit";
import macDataReducer from './slice'
export function dataStore() {
    return configureStore({
        reducer: {
            macData : macDataReducer
        }
    })
}
export const store = dataStore()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch