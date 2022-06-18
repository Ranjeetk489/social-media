import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../graphql/typedefs';
import resolvers from '../graphql/resolvers';
import { config } from 'dotenv';
import getClaims from './utils';
import cors from 'cors';
const jwt = require('jsonwebtoken');
import {v4 as uuidv4} from 'uuid';

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
    //         const refreshTokenUuid = uuidv4();
    //         const token = jwt.verify(response.data.authenticate, process.env.JWT_SECRET);
    //         refreshTokens[refreshTokenUuid] = token.data;
    //         const refreshToken = jwt.sign({data: refreshTokenUuid}, process.env.JWT_SECRET, {expiresIn: '7d'});
    //         requestContext.response?.http?.setHeader('Set-Cookie', `refreshToken=${refreshToken}; Expires=${tokenExpireDate.toUTCString()}; Path=/`);
    //         }
    //     }
    // },
    context: ({ req }) => ({
        claims: getClaims(req.headers.authorization),
        refreshToken:"fsdaafsdfasdfasdf"
    }),
});



const app = express();


server.start().then(() => {
    server.applyMiddleware({ app });
});

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
