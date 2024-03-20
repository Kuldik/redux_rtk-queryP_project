import { api } from "./api"

export const recipeApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createRecipe: builder.mutation({
            query: (recipe) => ({
                url: '/',
                method: 'POST',
                body: recipe
            }),
            invalidatesTags: ['Recipe']
        // }),
        // renameRecipe: builder.mutation({
        //     query: (recipe) => ({
        //         url: `/${recipe.name}`,
        //         method: 'PUT',
        //         body: recipe
        //     }),
        //     invalidatesTags: ['Recipe']
        // }),
        // deleteRecipe: builder.mutation({
        //     query: (id) => ({
        //         url: `/${id}`,
        //         method: 'DELETE'
        //     }),
        //     invalidatesTags: ['Recipe']
        }),
    })
})

