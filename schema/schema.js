const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQlString,
  GraphQLInt,
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQlString },
    firstName: { tyoe: GraphQlString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQlString } },
      resolve(parentValue, args) {

      },
    },
  },
});
