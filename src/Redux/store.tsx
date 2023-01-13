import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authReducer';

const store = configureStore({
  reducer: {
    auth:authReducer
  },
  middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
    }),
})
export type AppDispatch = typeof store.dispatch;
export default store;