import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const githubApi = createApi({
    reducerPath: 'market/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://sushi-market.herokuapp.com', prepareHeaders: (headers) => {
            const token = window.localStorage.getItem('marketToken')
            if(token){
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: build => ({
        searchCategories: build.query({
            query: () => ({
                url: `/category`
            })
        }),
        getAllProduct: build.query({
            query: ({categories}) => ({
                url: `/products`,
                params: {
                    categories
                }
            })
        }),
        addNewUser: build.mutation({
            query: (user) => ({
                url: `/user/register`,
                method: 'POST',
                body: user
            })
        }),
        loginUser: build.mutation({
            query: (user) => ({
                url: `/user/login`,
                method: 'POST',
                body: user
            })
        }),
        loginByToken: build.query({
            query: () => ({
                url: `/user/me`
            })
        })
    })
})

export const {
    useSearchCategoriesQuery,
    useGetAllProductQuery,
    useAddNewUserMutation,
    useLoginUserMutation,
    useLoginByTokenQuery
} = githubApi
