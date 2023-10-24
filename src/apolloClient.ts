import { ApolloClient, InMemoryCache } from '@apollo/client'
import { setContext } from "@apollo/client/link/context"
import { createUploadLink } from "apollo-upload-client"
let serverLink: string | undefined = "" 

switch (process.env.NEXT_PUBLIC_SERVER_MODE) {
    case "STAGING":
        serverLink = process.env.NEXT_PUBLIC_SERVER_API_STAGING_LINK
        break;
    case "PRODUCTION":
        serverLink = process.env.NEXT_PUBLIC_SERVER_API_PRODUCTION_LINK
        break;
    case "DEVELOPMENT":
        serverLink = process.env.NEXT_PUBLIC_SERVER_API_DEVELOPMENT_LINK
        break;
    default:
        serverLink = process.env.NEXT_PUBLIC_SERVER_API_STAGING_LINK
        break;
}

const httpLink = createUploadLink({
    uri: `${serverLink}/graphql`,
})

const authLink = setContext((_, {headers}) => {
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem("") || ""
        }
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({ addTypename: false }),
})