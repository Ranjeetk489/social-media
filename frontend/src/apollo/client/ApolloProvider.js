import {
    ApolloClient,
    InMemoryCache,
    ApolloLink, HttpLink, from
} from "@apollo/client";
import {onError} from "@apollo/client/link/error";


const httpLink = new HttpLink({
    uri: "https://socialmedia-v1.herokuapp.com/graphql",
    // credentials: "include"
}); 

const errorLink = onError(({graphQlErrors, networkError}) => {
    if (graphQlErrors) {
        graphQlErrors.map(({message, locations, path, extensions}) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
            // switch(extensions.code) {
            //     case "UNAUTHENTICATED":
            //         console.log("User is not authenticated");   
            // }
        );
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});





const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache()
});



export default client;
