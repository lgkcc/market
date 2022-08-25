import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const githubApi = createApi({
    reducerPath: 'market/api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://sushi-market.herokuapp.com'}),
    endpoints: build => ({
        searchCategories: build.query({
            query: () => ({
                url: `/category`
            })
        }),
        getAllProduct: build.query({
            query: ({categories}) => ({
                url: `/products`,
                params:{
                    categories
                }
            })
        })
    })
})

export const {useSearchCategoriesQuery, useGetAllProductQuery} = githubApi
