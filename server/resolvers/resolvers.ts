import { MutationResolvers, QueryResolvers } from '../generated/resolvers.types';

export interface QueryParent {}

export const Query: QueryResolvers = {
  posts: (parent, args, { prisma }) => {
    return prisma.posts();
  }
};

export const Mutation: MutationResolvers = {
  createPost: async (parent, {post}, { prisma }) => {
    let result = await prisma.createPost(post);
    return result.redditID
  }
};
