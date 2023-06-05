import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/CreatedSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        //*AGREGAREMOS EL CODIGO REAL AQUÍ
    }
});

export default store;