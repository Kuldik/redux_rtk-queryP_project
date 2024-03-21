import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IRecipe} from '../../types/recipe.types'

const API_URL = 'http://localhost:4200/recipes'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'], // unique key for refresh recipes
    baseQuery: fetchBaseQuery({ 
        baseUrl: API_URL 
    }),
    endpoints: (builder) => ({
        getResipes: builder.query<IRecipe[], null>({
            query: () =>  '/',
            providesTags: () => [
                {
                    type: 'Recipe'
                }
            ]
        })

    })
})

export const {useGetResipesQuery, useCreateRecipeMutation, useRenameRecipeMutation, useDeleteRecipeMutation} = api