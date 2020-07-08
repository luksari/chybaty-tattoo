import React from 'react';
import { Layout } from "../components/Layout";
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';

const Wrapper = styled.section`
  display: flex;
`

const Header = styled.h1`
  font-size: 155px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 36px;
`;

const ProfileImage = styled(Image)`

`

export default ({ data }) => {
  const artist = data.allSitePage.edges[0].node.context
  return (
    <Layout title={artist.name}>
      <Wrapper>
        <Header>{artist.name}</Header>
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query($path: String!, regex: String!) {
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
    allFile(filter: { absolutePath: { regex: $regex }}) {
      edges {
        node {
          childImageSharp {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
