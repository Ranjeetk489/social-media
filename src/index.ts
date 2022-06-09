import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../graphql/typedefs';
import resolvers from '../graphql/resolvers';
import { config } from 'dotenv';
import getClaims from './utils';
import cors from 'cors';
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 4000;
const PATH = '/graphql';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    // formatResponse: (response, requestContext) => {
    //     if(response.errors && !requestContext.request.variables?.password) {
    //         if(requestContext.response.http) {
    //             requestContext.response.http.status = 401;
    //         }
    //         else if (response.data?.authenticate || response.data.refresh) {
    //             const tokenExpireDate = new Date();
    //             tokenExpireDate.setDate(
    //                 tokenExpireDate.getDate() + 60 * 60 * 24 * 7
    //             );
                
    //         }
    //     }
    // },
    context: ({ req }) => ({
        claims: getClaims(req.headers.authorization)
    })
});
const app = express();
app.use(cors());

server.start().then(() => {
    server.applyMiddleware({ app });
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
