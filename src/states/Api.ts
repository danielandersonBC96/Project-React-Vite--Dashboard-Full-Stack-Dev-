import { createApi ,  fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetKpisResponse, GetProductsResponse, GetTransactionsReponse } from './types';

export const api = createApi ({

    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: "main",
    tagTypes: [ "kpis" , "Products", 'Transactions'],
    endpoints: ( build) => ({
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "kpi/kpis",
            providesTags:["kpis"],

        }),
        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => "product/products" , 
            providesTags: [ "Products"],
        }),
        getTransactions: build.query<Array<GetTransactionsReponse>, void>({
            query: () => "transaction/transactions" , 
            providesTags: [ "Transactions"],
        }),
  
  
    }),
})

export const { useGetKpisQuery,useGetProductsQuery, useGetTransactionsQuery} = api;