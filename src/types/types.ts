export type FollowingProps = {
  totalCount: number
}

export type FollowersProps = {
  totalCount: number
}

export type RepositoriesProps = {
  totalCount: number
}

export type itemShowCaseProps = {
  hasPinnedItems: boolean
  items: {
    nodes: [
      {
        name: string
        description: string
        url: string
      }
    ]
  }
}

export type QueryProps = {
  following: FollowingProps
  followers: FollowersProps
  repositories: RepositoriesProps
  itemShowcase: itemShowCaseProps
}
