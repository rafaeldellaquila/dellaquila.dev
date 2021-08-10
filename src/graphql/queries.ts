import { gql } from 'graphql-request'

const query = gql`
  fragment totalFollowing on User {
    following(first: 1) {
      totalCount
    }
  }

  fragment totalFollowers on User {
    followers(first: 1) {
      totalCount
    }
  }

  fragment totalRepositories on User {
    repositories(affiliations: OWNER, first: 1) {
      totalCount
    }
  }

  fragment showcase on User {
    itemShowcase {
      hasPinnedItems
      items(first: 10) {
        nodes {
          ... on Repository {
            name
            description
            url
          }
        }
      }
    }
  }

  query GET_GITHUB_QUERIES {
    viewer {
      ...totalFollowing
      ...totalFollowers
      ...totalRepositories
      ...showcase
    }
  }
`

export default query
