const GET_GITHUB_QUERIES = /* GraphQL */ `
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
        edges {
          node {
            ... on Repository {
              name
              description
              url
              viewerHasStarred
            }
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
export default GET_GITHUB_QUERIES
