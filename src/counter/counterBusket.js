import { Api } from '@mui/icons-material';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { message } from 'antd';


const initialState = {
    cnt: 0,
    korzina: [],
    cartQuantity: 0,
    cartTotoal: 0
}


export const fetchBusket = createAsyncThunk(
    'counterBusket/fetchBusket',
    async () => {
        try {
            const response = await axios.get('http://localhost:3000/data2');
            return response.data;
        } catch (error){
            console.error('Error fetching todos:', error);
            throw error;
        }
    }
)


export const addBusket = createAsyncThunk(
    'data2/addBusket',
    async (obj) => {
        try {
            const response = await axios.post('http://localhost:3000/data2', obj);
            message.success("Added to Cart")
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);


export const deleteProduct = createAsyncThunk(
    "data2/deleteProduct",
    async function (id, {dispatch}){
        try{
            const {data} = await axios.delete(`${'http://localhost:3000/data2'}/${id}`)
            dispatch(fetchBusket())
            return data
        } catch(error){
            console.log("ERRORO");
        }
    }
)



export const counterBusket = createSlice({
    name: 'busket',
    initialState,
    reducers: {
        setIncremement: (state, action) => {
          const itemIndex = state.korzina.findIndex(
            (item) => item.id === action.payload.id
          );
          if (itemIndex >= 0) {
            state.cartQuantity = state.korzina[itemIndex].cartQuantity += 1;
            message.success("Plus to Quantity")
          }
        },
        setDecrement: (state, action) => {
          const itemIndex = state.korzina.findIndex(
            (item) => item.id === action.payload.id
          );
          console.log(itemIndex);
    
          if (state.korzina[itemIndex].cartQuantity > 1) {
            state.cartQuantity = state.korzina[itemIndex].cartQuantity -= 1;
            message.success("Minus to Quantity")
          }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBusket.fulfilled, (state, action) => {
                state.korzina = action.payload;
            })
    }
})


export const {setDecrement, setIncremement } = counterBusket.actions;
export default counterBusket.reducer
