import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {  
    value: 0,
    todos: [],
}

export const fetchTodos = createAsyncThunk(
    'counter/fetchTodos',
    async () => {
        try {
            const response = await axios.get("http://localhost:3000/data");
            return response.data;
        } catch (error) {
            console.error('Error fetching todos:', error);
            throw error;
        }
    }
)


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
            })
    }
})
export const {textSearchValue} = counterSlice.actions
export default counterSlice.reducer