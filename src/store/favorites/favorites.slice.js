import {createSlice} from '@reduxjs/toolkit'

const initialState = []

export const favoritesSilce = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite(state, {payload: recipe}) {
            const isExist = state.some(r => r.id === recipe.id) 
            state.push(recipe)

            if (isExist) {
                return state.filter(r => r.id !== recipe.id)
            } else {
                state.push(recipe)
            }
        },
        
    }
})

export const {actions, reducer} = favoritesSilce