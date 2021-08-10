import client from 'graphql/client'
import GET_GITHUB_QUERIES from 'graphql/queries/getGithubQueries'
import { GetStaticProps } from 'next'
import Home from 'templates/Home'

export default function HomePage() {
  return <Home />
}

export const getStaticProps: GetStaticProps = async () => {
  const { viewer } = await client.request(GET_GITHUB_QUERIES)
  return {
    props: {
      ...viewer
    }
  }
}
