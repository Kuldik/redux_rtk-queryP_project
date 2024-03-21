import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IRecipe} from '../../types/recipe.types'

const initialState: IRecipe[] = []

export const favoritesSilce = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite(state, {payload: recipe}: PayloadAction<IRecipe>) {
            const isExist = state.some(r => r.id === recipe.id) 

            if (isExist) {
                const index = state.findIndex(item => item.id === recipe.id)
                if (index !== -1) {
                    state.splice(index, 1)
            } 
            } else {
                state.push(recipe)
            }

        },
        
        
    }
})

export const {actions, reducer} = favoritesSilce