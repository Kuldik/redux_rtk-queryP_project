import { api } from "./api"

export const recipeApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createRecipe: builder.mutation({
            query: (recipe) => ({
                url: '/',
                method: 'POST',
                body: recipe
            }),
            invalidatesTags: () => [
                {
                    type: 'Recipe',
                }
            ]
            }),
            renameRecipe: builder.mutation({
                query: (recipe) => ({
                    url: `/${recipe.name}`,
                    method: 'PUT',
                    body: recipe
                }),
                invalidatesTags: ['Recipe']
            }),
            deleteRecipe: builder.mutation({
                query: (id) => ({
                    url: `/${id}`,
                    method: 'DELETE'
                }),
                invalidatesTags: ['Recipe']
        }),
    })
})

export const {useCreateRecipeMutation, useRenameRecipeMutation, useDeleteRecipeMutation} = recipeApi

