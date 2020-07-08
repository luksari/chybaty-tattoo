import React from 'react';
import { Layout } from "../components/Layout";
import { graphql } from 'gatsby';

export default ({ data }) => {
  const artist = data.allSitePage.edges[0].node.context
  return (
    <Layout title={artist.name}>
      {artist.name}
    </Layout>
  );
}

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            profilePicture
            mainDescription
            socialLink
            images {
              src
            }
          }
        }
      }
    }
  }
`
