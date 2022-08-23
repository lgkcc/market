import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const githubApi = createApi({
    reducerPath: 'market/api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4444'}),
    endpoints: build => ({
        searchCategories: build.query({
            query: () => ({
                url: `/category`
            })
        }),
        getAllProduct: build.query({
            query: () => ({
                url: `/products`
            })
        })
    })
})

export const {useSearchCategoriesQuery, useGetAllProductQuery} = githubApi
