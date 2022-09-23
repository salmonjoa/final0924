import { configureStore, createSlice } from '@reduxjs/toolkit'

let allData = createSlice({
    name : 'personal',
    initialState :[],
    reducers : {
        dish(state, action){
            // state.push(action.payload);
            state = [...action.payload]
            return state
        }
    }
})

// export let { dish } = allData.actions;

export default configureStore({
    reducer: { 
        allData : allData.reducer
    }
  })