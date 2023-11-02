"use client"
import React from 'react'
import {  ApolloProvider } from '@apollo/client'
import { client } from '@/apolloClient'
const ApolloProviders = ({children}: {children: React.ReactNode}) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

export default ApolloProviders
