import { configureStore } from '@reduxjs/toolkit'
import  counterSlice from '../counter/counterSlice'
import counterBusket from '../counter/counterBusket'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        busket: counterBusket,
    },
})