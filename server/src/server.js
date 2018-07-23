import { GraphQLServer } from 'graphql-yoga';
import { Prisma, forwardTo } from 'prisma-binding';

const resolvers = {
  Query: {
    recipe: forwardTo('prisma'),
    recipes: forwardTo('prisma'),
    user: forwardTo('prisma'),
    // recipes(_, args, context, info) {
    //   return context.prisma.query.recipes(
    //     {
    //       where: {
    //         title_contains: args.searchString,
    //       },
    //     },
    //     info
    //   );
    // },
    // recipe(_, args, context, info) {
    //   return context.prisma.query.recipe(
    //     {
    //       where: {
    //         OR: [{ id: args.id }, { title: args.title }],
    //       },
    //     },
    //     info
    //   );
    // },
    // ingredient(_, args, context, info) {
    //   return context.prisma.query.ingredient(
    //     {
    //       where: {
    //         OR: [{ id: args.id }, { name: args.name }],
    //       },
    //     },
    //     info
    //   );
    // },
  },
  Mutation: {
    createRecipe(_, args, context, info) {
      return context.prisma.mutation.createRecipe(
        {
          data: {
            title: args.title,
            description: args.description,
            prepTime: args.prepTime,
            cookTime: args.cookTime,
          },
        },
        info
      );
    },
    deleteRecipe(_, args, context, info) {
      return context.prisma.mutation.deleteRecipe(
        {
          where: {
            id: args.id,
          },
        },
        info
      );
    },
  },
};

export default new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:4466',
    }),
  }),
});
