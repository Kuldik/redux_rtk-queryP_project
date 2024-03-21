import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../../types/user.types'

const fetchUserById = (userId: number): Promise<IUser>  => 
    new Promise((reolve) => {
        setTimeout(() => {
            reolve({id: 1, name: 'Alex'})
        }, 1000)
    })


export const getUserById = createAsyncThunk<IUser, number>('users/getUserById', async(userId, thunkApi) => {
    try {
        const response = await fetchUserById(userId)
        return response 
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
    
})