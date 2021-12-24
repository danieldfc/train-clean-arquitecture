import { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from '@/shared/infra/graphql';

export const setupApolloServer = async (app: Express): Promise<void> => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    playground: true,
  });
  await server.start();
  server.applyMiddleware({ app, path: '/' });
};
