import { createSlice, nanoid } from "@reduxjs/toolkit";


export const initialState = {
        todos : [],
}

export const todoSlice = createSlice({

    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo =  {
                id: nanoid(),
                text: action.payload,
            }
        }
    }

})