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
