import {
    Action,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import {userReducer} from "./slices/user";
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import {layoutReducer} from "./slices/layout";

export function makeStore() {
    return configureStore({
        reducer: {
            user: userReducer,
            layout: layoutReducer
        },
    });
}

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const wrapper = createWrapper<RootStore>(makeStore);



