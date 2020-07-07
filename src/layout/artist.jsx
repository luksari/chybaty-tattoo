import React from 'react';
import { Layout } from "../components/Layout";
import { graphql } from 'gatsby';

export default () => {
  return (
    <Layout>
      Dupa
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
            images
          }
        }
      }
    }
  }
`
