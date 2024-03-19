import { combineSlices, configureStore, combineReducers } from '@reduxjs/toolkit'
import { reducer as favoritesReducer } from './favorites/favorites.slice'
import { userSlice } from './user/user.slice'

const reducers = combineReducers({
    favorites: favoritesReducer,
    user: userSlice
})

export const store = configureStore({
    reducer: reducers,
    
})