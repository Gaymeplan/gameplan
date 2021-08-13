import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection, getConnectionOptions } from 'typeorm';
import { GameplanResolver } from './resolvers/GameplanResolver';
import { PositionResolver } from './resolvers/PositionResolver';

(async () => {
    const app = express();

    const options = await getConnectionOptions(
        process.env.NODE_ENV || 'development'
    );

    await createConnection({ ...options, name: 'default' });

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [GameplanResolver, PositionResolver],
            validate: true,
        }),
        context: ({ req, res }) => ({ req, res }),
    });

    apolloServer.applyMiddleware({ app, cors: true });
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`🚀 server started at http://localhost:${port}/graphql`);
    });
})();
