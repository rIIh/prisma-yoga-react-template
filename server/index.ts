import Next from 'next';
import { GraphQLServer, Options } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import Resolvers from './resolvers';
import { IResolvers } from 'graphql-tools';

import("http");


const dev = process.env.NODE_ENV !== 'production';
const ssrNext = Next({dev});
const handler = ssrNext.getRequestHandler();

ssrNext.prepare().then(async () => {
  const server = new GraphQLServer({
                                     typeDefs: './schema.graphql',
                                     resolvers: Resolvers as IResolvers,
                                     context: { prisma }
  }).use((req: any, res: any, next: any) => {
    if (req.path.startsWith("/graphql")) return next();
    handler(req, res, next);
  });

  const options: Options = {
    port: 4000,
    endpoint: '/graphql',
    playground: '/graphql',
  };
  await server.start(options, () => console.log('Server is running on localhost:' + options.port));
});
