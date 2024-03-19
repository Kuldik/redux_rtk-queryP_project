import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchUserById = (userId)  => 
    new Promise((reolve) => {
        setTimeout(() => {
            reolve({id: 1, name: 'Alex'})
        }, 1000)
    })


export const getUserById = createAsyncThunk('users/getUserById', async(userId, thunkApi) => {
    try {
        const response = await fetchUserById(userId)
        return response 
    } catch (error) {
        thunkApi.rejectWithValue(error)
    }
    
})