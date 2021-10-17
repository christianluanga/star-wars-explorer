//@ts-ignore
import { ApolloServer } from 'apollo-server-express';
//@ts-ignore
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import typeDefs from './types/TypeDefs.js';
import resolvers from './resolvers/Resolvers.js';
//@ts-ignore
import express from 'express';
//@ts-ignore
import  http  from 'http';
const PORT = process.env.PORT || 8000;
async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    try {
        await server.start();
        server.applyMiddleware({ app });
        await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    }
    catch (error) {
        console.log(error);
    }
}
startApolloServer(typeDefs, resolvers);

