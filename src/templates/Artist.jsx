import React from 'react';
import { Layout } from "../components/Layout";
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { CircleArrowButton } from '../components/CircleArrowButton';
import { ArtistPhotosGrid } from '../components/ArtistPhotosGrid';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`

const Heading = styled.h1`
  font-size: 155px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 36px;
  grid-column: 1/-1;
  margin-left: -135px;
  z-index: 1;
  margin-top: 75px;
  margin-bottom: 0;
`;

const ProfileImage = styled(Image)`
  width: 50%;
  flex: 1;
`

const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  flex: 1 1 auto;
`

const MainParagraph = styled.p`
  color: #fff;
  grid-column: 2/2;
  grid-row: 2/2;
  font-family: 'Exo 2', sans-serif;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 2.1px;
  margin-bottom: 0;
`

const SideWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 300px auto auto;
  grid-column-gap: 15px;
  grid-row-gap: 25px;
  margin-right: 70px;
  height: 80%;
  max-width: 40%;
  margin-bottom: 150px;
`

const SocialLink = styled.a`
  color: #fff;
  font-family: 'Exo 2', sans-serif;
  text-decoration: none;
  width: auto;
`

const SocialLinkWrapper = styled.div`
  grid-row: 3/3;
  grid-column: 2/2;
`

const StyledCircleButton = styled(CircleArrowButton)`
  grid-column: 1/1;
  grid-row: 2/2;
  margin-left: -20px;
  z-index: 1;
  align-self: start;
`

export default ({ data }) => {
  console.log(data)
  const artist = data.allSitePage.edges[0].node.context;
  const artistPhotos = data.photos.edges;
  const backPhotos = data.backPhotos.edges;
  const artistProfile = data.file.childImageSharp.fluid;
  return (
    <Layout title={artist.name}>
      <Wrapper>
        <HeaderWrapper>
          <ProfileImage fluid={artistProfile} />
          <SideWrapper>
            <Heading>{artist.name}</Heading>
            <StyledCircleButton label='Zobacz prace'/>
            <MainParagraph>{artist.mainDescription}</MainParagraph>
            <SocialLinkWrapper>
              <SocialLink href={`https://${artist.socialLink}`}>{artist.socialLink}</SocialLink>
            </SocialLinkWrapper>
          </SideWrapper>
        </HeaderWrapper>
        <ArtistPhotosGrid 
          backPhotos={backPhotos}
          photos={artistPhotos}
        />
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query($path: String!, $imagesRegex: String!, $profilePicture: String!, $backImagesRegex: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            mainDescription
            socialLink
          }
        }
      }
    },
    photos: allFile(sort: {fields: name}, filter: { absolutePath: { regex: $imagesRegex }}) {
      edges {
        node {
          name,
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    backPhotos: allFile(sort: {fields: name}, filter: { absolutePath: { regex: $backImagesRegex }}) {
      edges {
        node {
          name,
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    file(absolutePath: { regex: $profilePicture }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
