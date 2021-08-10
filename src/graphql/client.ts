import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    authorization: `Bearer ${process.env.AUTH_0}`
  }
})

export default client
